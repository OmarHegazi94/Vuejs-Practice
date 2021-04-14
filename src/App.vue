<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12">
                <h1>Custom Global Directives</h1>
                <p v-highlight:background.delayed="'green'">Color this</p>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12">
                <h1>Custom Local Directives</h1>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    directives: {
        "local-highlight": {
            beforeMount(el, binding) {
                let delay = 0;
                if (binding.modifiers["delayed"]) {
                  delay = 3000;
                }

                if (binding.modifiers["blink"]) {
                  let mainColor = binding.value.mainColor;
                  let secondColor = binding.value.secondColor;
                  let currentColor = mainColor;

                  setTimeout(() => {
                    setInterval( () => {
                      currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;

                      if (binding.arg == "background") {
                          el.style.backgroundColor = currentColor;
                      } else {
                          el.style.color = currentColor;
                      }
                    }, binding.value.delay)
                  }, delay);
                }

                else {
                  setTimeout(() => {
                      // el.style.background = binding.value;
                      if (binding.arg == "background") {
                          el.style.backgroundColor = binding.value.mainColor;
                      } else {
                          el.style.color = binding.value.mainColor;
                      }
                  }, delay);
                }

            },
        },
    },
};
</script>
