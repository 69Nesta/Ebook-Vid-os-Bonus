const links = [
    'https://www.youtube.com/embed/qsX7QknTrW0?si=eUC8NvOgvXC4Imvb',
    'https://www.youtube.com/embed/Gi46WHdHqwQ?si=VICby_aQatnWELSw',
    'https://www.youtube.com/embed/P6BiPUZUg9k?si=bem-aGs1ppirgnlq',
    'https://www.youtube.com/embed/I3JT6NLpzYk?si=hsXvukatuBZOLjVQ',
    'https://www.youtube.com/embed/O9ZZR2-Mp3c?si=CBDjphyZL83NezRN',
]

links.forEach(element => {
    document.getElementById('videos').innerHTML += `<iframe width="560" height="315" src="${element}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
});