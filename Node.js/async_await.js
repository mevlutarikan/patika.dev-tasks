const posts = [
  { id: 1, title: 'Post1', content: 'lorem1 lorem1 lorem1', author: 'Mevlut Arikan' },
  { id: 2, title: 'Post2', content: 'lorem2 lorem2 lorem2', author: 'Nil Arikan' },
  { id: 3, title: 'Post3', content: 'lorem3 lorem3 lorem3', author: 'Nisa Arikan' },
  { id: 4, title: 'Post4', content: 'lorem4 lorem4 lorem4', author: 'Doga Arikan' },
];

function listPost() {
  posts.forEach((post) => {
    console.log(`Title: ${post.title}\n${post.content}\nAuthor: ${post.author}\n`);
  });
}

let newPost = { id: 5, title: 'new Post', content: 'New post Lorem 5', author: 'Mevlut Arikan' };

function addPost(post) {
  return new Promise((resolve, reject) => {
    try {
      posts.push(post);
      resolve('Post Added');
    } catch (err) {
      reject('Something went wrong. Post was not added');
    }
  });
}

async function process() {
  try {
    listPost();
    await addPost(newPost);
    console.log('Post Added');
    listPost();
  } catch (err) {
    console.log(err);
  }
}

process();
