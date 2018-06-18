const post = {
    title: 'Первые шаги',
    shortDescription: 'Начал изучение git и github, взялся за верстку блога и составления структуры сайта...',
    tags: [
        'учеба',
        'CSS',
        'html'
    ],
    date: '04/05/2018'
}
window.addEventListener("load", () => {
    const postsFeed = document.getElementById('posts');
    
    const firstPost = createPost(post);
    postsFeed.appendChild(firstPost);
})

function createPost(post) {
    const container = document.createElement('div');
    container.classList.add('post');

    const dateElement = document.createElement('div');
    dateElement.classList.add('post__date');
    dateElement.appendChild(document.createTextNode(post.date));
    container.appendChild(dateElement);

    return container;
}
