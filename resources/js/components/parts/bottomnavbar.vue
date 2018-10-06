<template>
    <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                    <li class="is-active">
                        <a @click="navClick(4)"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;4</a>
                    </li>
                    <li>
                        <a @click="navClick(5)"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;5</a>
                    </li>
                    <li>
                        <a @click="navClick(6)"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;6</a>
                    </li>
                    <li>
                        <a @click="navClick(7)"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;7</a>
                    </li>
                    <li>
                        <a @click="navClick(8)"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;8</a>
                    </li>
                    <li>
                        <a @click="navClick(9)"><i class="fa fa-bolt" aria-hidden="true"></i>&nbsp;9</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "bottomnavbar",
        methods:{
            navClick(index){
                this.$emit("navclick",index);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~bulma';
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome';

</style>
