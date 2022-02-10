
const path = require('path')

const r = (...args) => path.resolve(__dirname, ...args)
const rt = (...args) => r('./templates', ...args)
const rc = (...args) => r('../components', ...args)

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称' },
    ],
    actions: [
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/index.ts'),
        templateFile: rt('index.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/{{ pascalCase name }}.ts'),
        templateFile: rt('component.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/style/index.ts'),
        templateFile: rt('style/index.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/style/index.scss'),
        templateFile: rt('style/style.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/index.md'),
        templateFile: rt('doc.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/interface.ts'),
        templateFile: rt('interface.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/demo/basic.tsx'),
        templateFile: rt('demo/basic.hbs'),
      },
    ]
  })
}
