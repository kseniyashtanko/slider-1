function StatusChecking () {
    var mainElement = document.querySelector('.container');
    var input = document.getElementsByTagName('input');
    var button = document.createElement('button');
    button.className='submit';
    button.innerHTML='Search';
    mainElement.appendChild(button);

    /*function clearField() {
        input.addEventListener('click', input.innerHTML='')
    }
    clearField();*/

    function handleEvents() {
        button.addEventListener('click', function() {
            var statusMessage = document.createElement('div');
            mainElement.appendChild(statusMessage);
            statusMessage.className='message';
            statusMessage.innerHTML='In Transit';

        })
    }
    handleEvents();

}
StatusChecking ();