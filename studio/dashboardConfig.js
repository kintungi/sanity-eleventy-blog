export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f521ad314289f6fdf3c2cd',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-r1h83yhf',
                  apiId: '4b53364e-fad9-4013-b37f-2e978363dff1'
                },
                {
                  buildHookId: '61f521ad12d701108033712e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-wvqazedv',
                  apiId: 'aa0b45ad-1618-4f68-92cb-a4c611da79c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kintungi/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-wvqazedv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
