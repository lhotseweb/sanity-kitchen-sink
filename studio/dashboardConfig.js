export default {
  widgets: [
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
                  buildHookId: '5ed1856790e459881f799dc9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t225zfyi',
                  apiId: '6cb1467b-511a-436d-a7a3-2207c04ae196'
                },
                {
                  buildHookId: '5ed185671826aaffde6cc176',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ett4gxir',
                  apiId: 'a3b3410a-31a9-49a9-ab5d-10c91714cb60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lhotseweb/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ett4gxir.netlify.app', category: 'apps'}
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
