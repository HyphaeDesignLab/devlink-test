const generator = require('@babel/generator').default;
const parser = require('@babel/parser');
const babelTypes = require('@babel/types');
const traverse = require('@babel/traverse').default;
const shell = require('shelljs');
const fs = require('fs');

if (!process.argv[2]) {
    console.log("Please enter the JSX file path as the first .js script argument")
    process.exit(1);
}

const cmd = `tr '\\n' '~' < ${process.argv[2]} | sed -E -e 's/.+(<body .+<\\/body>).+/\\1/' -e 's@<script [^>]+></script>@@g' | tr '~' '\\n'`;
const execObj = shell.exec(cmd, { silent: true});

// Parse JSX code into AST
const ast = parser.parse(execObj.stdout, {
    sourceType: 'module',
    plugins: ['jsx'],
});

// Tree representation
const tree = [];

// Traverse the AST to build the tree
traverse(ast, {
    JSXText(path) {
        const value = path.node.value.trim();
        if (!value) {
            return;
        }
        const element = {
            type: 'text',
            value
        };
        if (path.node._parent) {
            path.node._parent.children.push(element);
        } else {
            tree.push(element);
        }
    },
    JSXElement(path) {
        const node = path.node.openingElement;
        const element = {
            type: 'element',
            name: node.name.name,
            attributes: node.attributes.map(attr => ({
                name: attr.name.name,
                value: attr.value ? attr.value.value : null,
            })),
            children: []
        };
        if (node.name.name === 'Nav') {
            node.attributes.push(babelTypes.jsxAttribute(
                babelTypes.jsxIdentifier('a1'),
                babelTypes.stringLiteral('v1')
            ))
        }

        if (path.node.children.length > 0) {
            path.node.children.forEach(child => {
                child._parent = element
            });
        }

        if (path.node._parent) {
            path.node._parent.children.push(element);
        } else {
            tree.push(element);
        }
    }
});

// Output the tree
fs.writeFileSync('test.json', JSON.stringify(tree, null, 2));
const generatedCode = generator(ast, {}, execObj.stdout);
fs.writeFileSync('test.js', generatedCode.code);