import shutil
import os

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
  'Caption',
  'Circle',
  'Cite',
  'Clip Path',
  'Code',
  'Col',
  'Colgroup',
  'Data',
  'Datalist',
  'Defs',
  'Dd',
  'Del',
  'Details',
  'Dfn',
  'Dialog',
  'Div',
  'Dl',
  'Dt',
  'Ellipse',
  'Em',
  'Embed',
  'Fieldset',
  'Figcaption',
  'Figure',
  'Footer',
  'Foreign Object',
  'Form',
  'G',
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
  'Image',
  'Img',
  'Input',
  'Ins',
  'Kbd',
  'Label',
  'Legend',
  'Li',
  'Line',
  'Linear Gradient',
  'Main',
  'Map',
  'Mark',
  'Marker',
  'Mask',
  'Meter',
  'Nav',
  'Object',
  'Ol',
  'Optgroup',
  'Option',
  'Output',
  'P',
  'Param',
  'Path',
  'Pattern',
  'Picture',
  'Pre',
  'Progress',
  'Polygon',
  'Polyline',
  'Q',
  'Radial Gradient',
  'Rect',
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
  'Stop',
  'Strong',
  'Sub',
  'Summary',
  'Sup',
  'Svg',
  'Table',
  'Tbody',
  'Td',
  'Text',
  'Textarea',
  'Tfoot',
  'Th',
  'Thead',
  'Time',
  'Tr',
  'Track',
  'Tspan',
  'U',
  'Ul',
  'Var',
  'Video',
  'Wbr',
]

def convertName(name):
  """
    Converts the sentence case name to pascal and camel case.

    :param name: Sentence case name
    :type name: str
    :returns: Converted pascal and camel case texts in a dict.
    :rtype: dict
  """

  return {
    'pascalCase': name.replace(' ', ''),
    'camelCase':  (name[0].lower() + name[1:]).replace(' ', ''),
  }

def replaceVariablesInFile(content, convertedName):
  """
    Replaces {pascalCase} and {camelCase} variables.

    :type content: str
    :param convertedName: returned dict from convertName method.
    :type convertedName: dict
    :rtype: str
  """

  return content.replace('{pascalCase}', convertedName['pascalCase']).replace('{camelCase}', convertedName['camelCase'])

indexFileContent = ''

for item in ELEMENTS:
  convertedName = convertName(item)

  with open(target + '/' + convertedName['pascalCase'] + '.tsx', 'w') as file:
    file.write(replaceVariablesInFile(componentFileContent, convertedName))

  with open(target + '/' + convertedName['pascalCase'] + '.test.tsx', 'w') as file:
    file.write(replaceVariablesInFile(componentTestFileContent, convertedName))

  indexFileContent += 'export { default as ' + convertedName['pascalCase'] + ' } from \'./' + convertedName['pascalCase'] + '\'\n'

with open(target + '/index.tsx', 'w') as file:
  file.write(indexFileContent)
