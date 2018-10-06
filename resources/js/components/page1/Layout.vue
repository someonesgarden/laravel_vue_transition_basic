<template>
    <section class="hero is-warning is-large is-fullheight">

        <nav-bar
            ref="navbar"
            @navclick="onNavClick"
        ></nav-bar>

        <main-page1
            ref="page1"
        ></main-page1>

        <bottom-nav-bar
            ref="bottomnav"
            @navclick="onNavClick"
        ></bottom-nav-bar>

    </section>
</template>

<script>

    import BottomNavBar from '../parts/bottomnavbar.vue';
    import NavBar from '../parts/navbar.vue';
    import MainPage1 from './MainPage1.vue';

    export default {

        components: {NavBar, BottomNavBar, MainPage1},
        data() {
            return {
                show: true
            }
        },

        methods: {
            onNavClick(val) {
                this.$refs.page1.toggleShow1();
            }
        },

        mounted() {
            console.log('Component mounted.');
        }
    }
</script>

<style scoped lang="scss">
    @import '~bulma';
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome';

    .v-enter-active, .v-leave-active {
        transition: opacity 1.5s;
    }

    .v-enter, .v-leave-to {
        opacity: 0;
    }


</style>
