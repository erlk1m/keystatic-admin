import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'erlk1m/webku',
  },
  images: {
    directory: 'src/assets/images/blog',
    publicPath: '/src/assets/images/blog/',
    upload: () => true,
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul' } }),
        description: fields.text({ label: 'Deskripsi' }),
        link: fields.text({ label: 'Link URL' }),
        date: fields.datetime({ label: 'Tanggal', validation: { isRequired: true } }),
        updated: fields.datetime({ label: 'Tanggal Update' }),
        cover: fields.text({ label: 'Cover Image URL' }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'armbian', value: 'armbian' },
            { label: 'armbial', value: 'armbial' },
            { label: 'AI', value: 'AI' },
            { label: 'ai', value: 'ai' },
            { label: 'xiaomi', value: 'xiaomi' },
            { label: 'mimo', value: 'mimo' },
            { label: 'llm', value: 'llm' },
            { label: 'docker', value: 'docker' },
            { label: 'rust', value: 'rust' },
            { label: 'linux', value: 'linux' },
            { label: 'tutorial', value: 'tutorial' },
          ],
        }),
        customTags: fields.array(
          fields.text({ label: 'Tag Baru' }),
          { label: 'Tag Custom', itemLabel: (props) => props.value }
        ),
        subtitle: fields.text({ label: 'Subtitle' }),
        catalog: fields.checkbox({ label: 'Catalog', defaultValue: true }),
        categories: fields.multiselect({
          label: 'Kategori',
          options: [
            { label: 'AI', value: 'AI' },
            { label: 'ai', value: 'ai' },
            { label: 'armbian', value: 'armbian' },
            { label: 'tutorial', value: 'tutorial' },
            { label: 'rust', value: 'rust' },
            { label: 'pengetahuan', value: 'pengetahuan' },
          ],
        }),
        customCategories: fields.array(
          fields.text({ label: 'Kategori Baru' }),
          { label: 'Kategori Custom', itemLabel: (props) => props.value }
        ),
        sticky: fields.checkbox({ label: 'Sticky' }),
        draft: fields.checkbox({ label: 'Draft' }),
        tocNumbering: fields.checkbox({ label: 'TOC Numbering', defaultValue: true }),
        excludeFromSummary: fields.checkbox({ label: 'Exclude from Summary' }),
        math: fields.checkbox({ label: 'Math' }),
        quiz: fields.checkbox({ label: 'Quiz' }),
        password: fields.text({ label: 'Password' }),
        keywords: fields.array(fields.text({ label: 'Keyword' }), { label: 'Keywords', itemLabel: (props) => props.value }),
        content: fields.markdoc({
          label: 'Konten',
          extension: 'mdoc',
        }),
      },
    }),
  },
});