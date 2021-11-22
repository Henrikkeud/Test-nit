export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '619bd705bfdc6b4ae0a71a0a',
                  title: 'Sanity Studio',
                  name: 'test-nit-studio',
                  apiId: 'b1b9ea31-1fde-49ed-b6d5-58b3e7f41795'
                },
                {
                  buildHookId: '619bd7056343364de698b5a9',
                  title: 'Landing pages Website',
                  name: 'test-nit',
                  apiId: '30347a6a-9718-49d8-9854-c6df19f63dc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Henrikkeud/Test-nit',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-nit.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
