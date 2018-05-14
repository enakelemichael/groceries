let groceries = [
    'Butter',
    'Sugar',
    'Bread',
    'Roll',
    'Coffee',
    'Sandine'
];

refresh();

function refresh() {
    document.getElementById('list').innerHTML = '';
    groceries.forEach(function(item) {
        let line = '<div class="day">' + item + '</div>';
        document.getElementById('list').innerHTML += line;

});

}
function addItem(){
    let item = prompt ('New item')
    groceries.push(item);
    refresh();
}
