const tagList = document.getElementById('tagList');

let skills = [];

function renderTags() {
    tagList.innerHTML = '';
    skills.forEach((skill, index) => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${skill} <span data-index="${index}">x</span>`;
        tagList.appendChild(tag);
    });

}

skillInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && skillInput.value.trim() !== '') {
        skills.push(skillInput.value.trim());
        skillInput.value = '';
        renderTags();
    }
});

tagList.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        const index = e.target.getAttribute('data-index');
        skills.splice(index, 1);
        renderTags();
    }
});