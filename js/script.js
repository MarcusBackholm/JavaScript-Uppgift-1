let inputCounter = document.getElementById("input-number");
inputCounter.addEventListener('change', setEqual);

function setEqual()
{
    let smallTextInput = document.createElement("textarea");
    smallTextInput.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
    smallTextInput.type="text";
    smallTextInput.className = "textInputClass";
    smallTextInput.id = "smallTextInputId"; 
    let parent = document.getElementById("container");
    parent.appendChild(smallTextInput);
}

function removal()
{

}