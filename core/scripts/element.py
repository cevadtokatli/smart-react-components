import shutil
import os
import re

target = '../src/Element'

if os.path.exists(target):
  shutil.rmtree(target)

os.mkdir(target)

componentFileContent = None
componentTestFileContent = None

with open('./element/Component', 'r') as file:
  componentFileContent = file.read()

with open('./element/Component.test', 'r') as file:
  componentTestFileContent = file.read()

ELEMENTS = [
  'A',
  'Abbr',
  'Address',
  'Area',
  'Article',
  'Aside',
  'Audio',
  'B',
  'Base',
  'Bdi',
  'Bdo',
  'Blockquote',
  'Br',
  'Button',
  'Canvas',
  ('Caption', 'table'),
  ('Circle', 'svg'),
  'Cite',
  ('Clip Path', 'svg'),
  'Code',
  ('Col', 'table,colgroup'),
  ('Colgroup', 'table'),
  'Data',
  'Datalist',
  ('Defs', 'svg'),
  'Dd',
  'Del',
  'Details',
  'Dfn',
  'Dialog',
  'Div',
  'Dl',
  'Dt',
  ('Ellipse', 'svg'),
  'Em',
  'Embed',
  'Fieldset',
  'Figcaption',
  'Figure',
  'Footer',
  ('Foreign Object', 'svg'),
  'Form',
  ('G', 'svg'),
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'Header',
  'Hr',
  'I',
  'Iframe',
  ('Image', 'svg'),
  'Img',
  'Input',
  'Ins',
  'Kbd',
  'Label',
  'Legend',
  'Li',
  ('Line', 'svg'),
  ('Linear Gradient', 'svg'),
  'Main',
  'Map',
  'Mark',
  ('Marker', 'svg'),
  ('Mask', 'svg'),
  'Meter',
  'Nav',
  'Object',
  'Ol',
  'Optgroup',
  'Option',
  'Output',
  'P',
  'Param',
  ('Path', 'svg'),
  ('Pattern', 'svg'),
  'Picture',
  'Pre',
  'Progress',
  ('Polygon', 'svg'),
  ('Polyline', 'svg'),
  'Q',
  ('Radial Gradient', 'svg'),
  ('Rect', 'svg'),
  'Rp',
  'Rt',
  'Ruby',
  'S',
  'Samp',
  'Section',
  'Select',
  'Small',
  'Source',
  'Span',
  ('Stop', 'svg'),
  'Strong',
  'Sub',
  'Summary',
  'Sup',
  'Svg',
  'Table',
  ('Tbody', 'table'),
  ('Td', 'table,tbody,tr'),
  ('Text', 'svg'),
  'Textarea',
  ('Tfoot', 'table'),
  ('Th', 'table,thead,tr'),
  ('Thead', 'table'),
  'Time',
  ('Tr', 'table,thead'),
  'Track',
  ('Tspan', 'svg'),
  'U',
  'Ul',
  'Var',
  'Video',
  'Wbr',
]

def convertName(name):
  """
    Converts the title case name to pascal and camel case.

    :param name: Title case name
    :type name: str
    :returns: Converted pascal and camel case texts in a dict.
    :rtype: dict
  """

  return {
    'pascalCase': name.replace(' ', ''),
    'camelCase':  (name[0].lower() + name[1:]).replace(' ', ''),
  }

def replaceVariablesInFile(content, convertedName, parent):
  """
    Replaces {pascalCase} and {camelCase} variables.

    :type content: str
    :param convertedName: returned dict from convertName method.
    :type convertedName: dict
    :rtype: str
  """

  result = content.replace('{pascalCase}', convertedName['pascalCase'])
  result = result.replace('{camelCase}', convertedName['camelCase'])

  if parent is not None:
    tags = ''.join(['<{0}>'.format(i) for i in parent.split(',')])
    result = result.replace('{container}', tags)

    closingTags = ''.join(['</{0}>'.format(i) for i in parent.split(',')][::-1])
    result = result.replace('{/container}', closingTags)
  else:
    result = re.sub(r'{\/?container}', '', result)

  return result

indexFileContent = ''

for item in ELEMENTS:
  (name, parent) = (item, None) if isinstance(item, str) else item
  convertedName = convertName(name)

  with open(target + '/' + convertedName['pascalCase'] + '.tsx', 'w') as file:
    file.write(replaceVariablesInFile(componentFileContent, convertedName, parent))

  with open(target + '/' + convertedName['pascalCase'] + '.test.tsx', 'w') as file:
    file.write(replaceVariablesInFile(componentTestFileContent, convertedName, parent))

  indexFileContent += 'export { default as ' + convertedName['pascalCase'] + ' } from \'./' + convertedName['pascalCase'] + '\'\n'

with open(target + '/index.tsx', 'w') as file:
  file.write(indexFileContent)
