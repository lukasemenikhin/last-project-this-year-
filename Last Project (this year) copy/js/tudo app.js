$(document).ready(function () {
    $('#add').on('click', function () {
        let input = $('#input').val();

        if (input == "") {
            alert('Type item first!');
            return;
        }

        $('#list').append(`
        <li>
            <span>
                <input type="checkbox">
                ${input}
            </span>
            <i id="del" class="fa-solid fa-trash-can"></i>
        </li>
        `);

        $('#input').val("");
    })

    $('#list').on('click', 'i', function () {
        $(this).parent().detach();
    })
})

$('#list').on('click', 'input', function () {
    $(this).parent().html('<del>deleted<del/>');
})

$('#delete').on('click', function () {
    $('del').parent().parent().detach();
})