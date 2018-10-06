<template>

    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="/images/sog_logo.png" alt="Logo">
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB" v-on:click="menuToggle()"
                          v-bind:class="{ 'is-active': menuActive }">
            <span></span>
            <span></span>
            <span></span>
          </span>
                </div>
                <div id="navbarMenuHeroB" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
                    <div class="navbar-end">

                          <span class="navbar-item">
                            <a class="button is-dark is-inverted" @click="navClick(0)">
                              <i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;0
                            </a>
                         </span>

                        <a class="navbar-item is-active" @click="navClick(1)">
                            <i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;1
                        </a>
                        <a class="navbar-item" @click="navClick(2)">
                            <i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;2
                        </a>
                        <a class="navbar-item" @click="navClick(3)">
                            <i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;3
                        </a>


                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar",

        data() {
            return {
                menuActive: false
            }
        },
        methods: {
            menuToggle() {
                this.menuActive = !this.menuActive;
            },
            navClick(index){
                this.$emit("navclick",index);
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '~bulma';
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome';

</style>
