
let numClick = 0;

$(document).ready(init);

function init() {
    console.log('Yerp');

    $('.js-btn-generate').on('click', createDiv);
    $('.js-container').on('click', '.js-btn-yellow', changeYellow);
    $('.js-container').on('click', '.js-btn-delete', deleteParent);
}

function createDiv() {
    numClick++;

    $('.js-container').append(`
        <div class="box">
            <p>${numClick}</p>
            <button class="js-btn-yellow">Yellow</button>
            <button class="js-btn-delete">Delete</button>
        </div>
    `)
}

function changeYellow() {
    $(this).parent().addClass('yellow');
}

function deleteParent() {
    $(this).parent().remove();
}