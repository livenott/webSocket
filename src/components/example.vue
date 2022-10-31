<template>
    <section id="main">
        <div class="container">
            <h3>
                New Page
            </h3>
            <div class="d-flex">
                <div>
                    am
                </div>
                <div>
                    am
                </div>
                <div>
                    am
                </div>
            </div>
        </div>
    </section>
</template>
<script>
console.log('Hello World');

var animalObjects = {
  cow: 3,
  hourse: 2,
};

var animalDiv = document.body.appendChild(document.createElement('div'))

for (const prop in animalObjects) {
    animalDiv.textContent += `animalObjects.${prop} = ${animalObjects[prop]}\n`;
  }
export default {

}
</script>