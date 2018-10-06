<template>
    <div class="hero-body">
        <div class="container has-text-centered">

            <b-container fluid>
                <b-row class="justify-content-md-center">

                    <b-col md="4" sm="12" class="minbox">

                        <transition appear>

                            <div class="card" v-if="show1">
                                <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response1
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                                </div>
                            </div>

                        </transition>

                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                            <h1 class="title">
                                <i class="fa fa-flag" aria-hidden="true"></i>
                                Response2
                            </h1>

                            <h2 class="subtitle">
                                response description.
                            </h2>
                            </div>
                        </div>

                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                            <h1 class="title">
                                <i class="fa fa-flag" aria-hidden="true"></i>
                                Response3
                            </h1>

                            <h2 class="subtitle">
                                response description.
                            </h2>
                            </div>
                        </div>
                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response3
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                            </div>
                        </div>
                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response3
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                            </div>
                        </div>
                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response3
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                            </div>
                        </div>
                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response3
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                            </div>
                        </div>
                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response3
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                            </div>
                        </div>
                    </b-col>

                    <b-col md="4" sm="12" class="minbox">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="title">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    Response3
                                </h1>

                                <h2 class="subtitle">
                                    response description.
                                </h2>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>

        </div>
    </div>
</template>

<script>
    export default {
        name: "mainpage1",
        data() {
            return {
                show1: true
            }
        },
        methods:{
            toggleShow1(){
                this.show1 = !this.show1;
            }
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


    .minbox{
        padding-bottom:15px;
    }
</style>
