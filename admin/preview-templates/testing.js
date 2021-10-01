const env = nunjucks.configure();

const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS());
  const html = env.render(path, { ...data, helpers });
  return <div dangerouslySetInnerHTML={{ __html: html }}/>
};


const Post = ({ entry }) => (
  <Preview
    entry={entry}
    path="layouts/post.njk"
    context={({ title, story }) => ({
      title,
      story,
    })}
  />
);


CMS.registerPreviewTemplate('blog', Post);
