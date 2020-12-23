export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fe36967e4c1eab28b9d9171',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wpg6ivjb',
                  apiId: 'bba10b85-be7f-4f08-8cbe-295b5d8e8eac'
                },
                {
                  buildHookId: '5fe369677b9364a19e3e4171',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6pkcvj1o',
                  apiId: 'fea902e2-41e9-459d-a72d-a3b06391311a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ElmarJ/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6pkcvj1o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
