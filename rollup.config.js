const nodeResolve = require("rollup-plugin-node-resolve")
const commonjs = require("rollup-plugin-commonjs")
const typescript = require("rollup-plugin-typescript2")

module.exports = {
    input: {
        "default-value": "./src/default-value/index$.tsx",
        "theme": "./src/theme/index.tsx",
        "alert/index": "./src/alert/index.tsx",
        "alert/CloseIcon": "./src/alert/CloseIcon.tsx",
        "badge/index": "./src/badge/index.tsx",
        "badge/Container": "./src/badge/Container$.tsx",
        "badge/Icon": "./src/badge/Icon$.tsx",
        "badge/Text": "./src/badge/Text$.tsx",
        "button/index": "./src/button/index.tsx",
        "button/Element": "./src/button/Element$.tsx",
        "button/Select": "./src/button/Select.tsx",
        "button/Group": "./src/button/Group.tsx",
        "element/A": "./src/element/A.tsx",
        "element/Abbr": "./src/element/Abbr.tsx",
        "element/Address": "./src/element/Address.tsx",
        "element/Area": "./src/element/Area.tsx",
        "element/Article": "./src/element/Article.tsx",
        "element/Aside": "./src/element/Aside.tsx",
        "element/Audio": "./src/element/Audio.tsx",
        "element/B": "./src/element/B.tsx",
        "element/Bdi": "./src/element/Bdi.tsx",
        "element/Bdo": "./src/element/Bdo.tsx",
        "element/Big": "./src/element/Big.tsx",
        "element/Blockquote": "./src/element/Blockquote.tsx",
        "element/Br": "./src/element/Br.tsx",
        "element/Button": "./src/element/Button.tsx",
        "element/Canvas": "./src/element/Canvas.tsx",
        "element/Caption": "./src/element/Caption.tsx",
        "element/Cite": "./src/element/Cite.tsx",
        "element/Code": "./src/element/Code.tsx",
        "element/Col": "./src/element/Col.tsx",
        "element/Colgroup": "./src/element/Colgroup.tsx",
        "element/Datalist": "./src/element/Datalist.tsx",
        "element/Dd": "./src/element/Dd.tsx",
        "element/Del": "./src/element/Del.tsx",
        "element/Details": "./src/element/Details.tsx",
        "element/Dfn": "./src/element/Dfn.tsx",
        "element/Div": "./src/element/Div.tsx",
        "element/Dl": "./src/element/Dl.tsx",
        "element/Dt": "./src/element/Dt.tsx",
        "element/Em": "./src/element/Em.tsx",
        "element/Embed": "./src/element/Embed.tsx",
        "element/Fieldset": "./src/element/Fieldset.tsx",
        "element/Figcaption": "./src/element/Figcaption.tsx",
        "element/Figure": "./src/element/Figure.tsx",
        "element/Footer": "./src/element/Footer.tsx",
        "element/Form": "./src/element/Form.tsx",
        "element/H1": "./src/element/H1.tsx",
        "element/H2": "./src/element/H2.tsx",
        "element/H3": "./src/element/H3.tsx",
        "element/H4": "./src/element/H4.tsx",
        "element/H5": "./src/element/H5.tsx",
        "element/H6": "./src/element/H6.tsx",
        "element/Header": "./src/element/Header.tsx",
        "element/Hgroup": "./src/element/Hgroup.tsx",
        "element/Hr": "./src/element/Hr.tsx",
        "element/I": "./src/element/I.tsx",
        "element/Iframe": "./src/element/Iframe.tsx",
        "element/Img": "./src/element/Img.tsx",
        "element/Input": "./src/element/Input.tsx",
        "element/Ins": "./src/element/Ins.tsx",
        "element/Kbd": "./src/element/Kbd.tsx",
        "element/Keygen": "./src/element/Keygen.tsx",
        "element/Label": "./src/element/Label.tsx",
        "element/Legend": "./src/element/Legend.tsx",
        "element/Li": "./src/element/Li.tsx",
        "element/Main": "./src/element/Main.tsx",
        "element/Map": "./src/element/Map.tsx",
        "element/Mark": "./src/element/Mark.tsx",
        "element/Menu": "./src/element/Menu.tsx",
        "element/Meter": "./src/element/Meter.tsx",
        "element/Nav": "./src/element/Nav.tsx",
        "element/Ol": "./src/element/Ol.tsx",
        "element/Optgroup": "./src/element/Optgroup.tsx",
        "element/Option": "./src/element/Option.tsx",
        "element/Output": "./src/element/Output.tsx",
        "element/P": "./src/element/P.tsx",
        "element/Pre": "./src/element/Pre.tsx",
        "element/Progress": "./src/element/Progress.tsx",
        "element/Q": "./src/element/Q.tsx",
        "element/Rp": "./src/element/Rp.tsx",
        "element/Rt": "./src/element/Rt.tsx",
        "element/Ruby": "./src/element/Ruby.tsx",
        "element/S": "./src/element/S.tsx",
        "element/Samp": "./src/element/Samp.tsx",
        "element/Section": "./src/element/Section.tsx",
        "element/Select": "./src/element/Select.tsx",
        "element/Small": "./src/element/Small.tsx",
        "element/Span": "./src/element/Span.tsx",
        "element/Strong": "./src/element/Strong.tsx",
        "element/Sub": "./src/element/Sub.tsx",
        "element/Summary": "./src/element/Summary.tsx",
        "element/Sup": "./src/element/Sup.tsx",
        "element/Svg": "./src/element/Svg.tsx",
        "element/Table": "./src/element/Table.tsx",
        "element/Tbody": "./src/element/Tbody.tsx",
        "element/Td": "./src/element/Td.tsx",
        "element/Textarea": "./src/element/Textarea.tsx",
        "element/Tfoot": "./src/element/Tfoot.tsx",
        "element/Th": "./src/element/Th.tsx",
        "element/Thead": "./src/element/Thead.tsx",
        "element/Time": "./src/element/Time.tsx",
        "element/Tr": "./src/element/Tr.tsx",
        "element/Ul": "./src/element/Ul.tsx",
        "element/Var": "./src/element/Var.tsx",
        "element/Video": "./src/element/Video.tsx",
        "element/Wbr": "./src/element/Wbr.tsx",
        "fixed-box/index": "./src/fixed-box/index.tsx",
        "form/Radio": "./src/form/Radio.tsx",
        "form/Checkbox": "./src/form/Checkbox.tsx",
        "form/Switch": "./src/form/Switch.tsx",
        "form/Input": "./src/form/Input$.tsx",
        "form/InputElement": "./src/form/InputElement$.tsx",
        "form/InputFile": "./src/form/InputFile.tsx",
        "form/Textarea": "./src/form/Textarea.tsx",
        "form/TextareaElement": "./src/form/TextareaElement$.tsx",
        "form/Select": "./src/form/Select.tsx",
        "form/SelectBox": "./src/form/SelectBox.tsx",
        "form/Option": "./src/form/Option.tsx",
        "form/OptionCategory": "./src/form/OptionCategory.tsx",
        "grid/Container": "./src/grid/Container.tsx",
        "grid/Row": "./src/grid/Row.tsx",
        "grid/Column": "./src/grid/Column.tsx",
        "loading/index": "./src/loading/index.tsx",
        "modal/index": "./src/modal/Modal.tsx",
        "modal/Header": "./src/modal/Header$.tsx",
        "modal/Title": "./src/modal/Title$.tsx",
        "modal/CloseIcon": "./src/modal/CloseIcon.tsx",
        "modal/Body": "./src/modal/Body$.tsx",
        "modal/Footer": "./src/modal/Footer$.tsx",
        "overlay/index": "./src/overlay/index.tsx",
        "pop-up/Alert": "./src/pop-up/Alert.tsx",
        "pop-up/Confirm": "./src/pop-up/Confirm.tsx",
        "pop-up/Prompt": "./src/pop-up/Prompt.tsx",
        "progress-bar/index": "./src/progress-bar/index.tsx",
        "ssr/init": "./src/ssr/init.tsx",
        "table/Container": "./src/table/Container.tsx",
        "table/Table": "./src/table/Table.tsx",
        "table/Thead": "./src/table/Thead.tsx",
        "table/Tbody": "./src/table/Tbody.tsx",
        "table/Tfoot": "./src/table/Tfoot.tsx",
        "table/Tr": "./src/table/Tr.tsx",
        "table/Th": "./src/table/Th.tsx",
        "table/Td": "./src/table/Td.tsx",
        "transition/Transition": "./src/transition/Transition$.tsx",
        "transition/CSSTransition": "./src/transition/CSSTransition$.tsx",
        "transition/SlideTransition": "./src/transition/SlideTransition$.tsx",
        "wave-effect/index": "./src/wave-effect/index.tsx"
    },
    output: [
        {
            dir: "./dist",
            format: "cjs"
        }
    ],
    external: [
        "react",
        "react-dom",
        "styled-components"
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript()
    ]
}