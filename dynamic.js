"use strict"

function test() {
    console.log("the js file is being imported")
}

function CopyToClipboard(self) {
    let log_text = self.firstElementChild.value
    let clipboard_text = self.lastElementChild.textContent

    // TODO: give a nice custom alert box that you copied the specific text to the clipboard
    // Should disappear after like 3 seconds without any user input
    let timerInterval
    Swal.fire({
    title: 'Auto close alert!',
    html: "Copied Jason Ledon's " + log_text + " to your clipboard",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })


    navigator.clipboard.writeText(clipboard_text).then(function () {
        alert("Copied Jason Ledon's " + log_text + " to your clipboard")
    }, function () {
        alert('Failure to copy. Check permissions for clipboard')
    });
}