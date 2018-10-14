<template>
    <div class="social-media-rising">
        <ul>
            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-facebook-f"></span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-twitter"></span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-google-plus-g"></span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-linkedin-in"></span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-github"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SocialMediaRising"
    }
</script>

<style lang="scss" scoped>

    .social-media-rising {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        ul {
            position: relative;
            margin: 0;
            padding: 0;
            display: flex;

            li {
                position: relative;
                list-style: none;
                width: 80px;
                height: 80px;
                margin: 0 50px;
                transform: rotate(-30deg) skew(25deg);

                &:hover {
                    span:nth-child(5) {
                        transform: translate(40px, -40px);
                        opacity: 1;
                    }

                    span:nth-child(4) {
                        transform: translate(30px, -30px);
                        opacity: .8;
                    }

                    span:nth-child(3) {
                        transform: translate(20px, -20px);
                        opacity: .6;
                    }

                    span:nth-child(2) {
                        transform: translate(10px, -10px);
                        opacity: .4;
                    }

                    span:nth-child(1) {
                        transform: translate(0, 0);
                        opacity: .2;
                    }

                    & span {
                        box-shadow: -1px 1px 1px rgba(0,0,0,.1);
                    }
                }

                &:nth-child(1) span {
                    background: #3b5999;
                }

                &:nth-child(2) span {
                    background: #55acee;
                }

                &:nth-child(3) span {
                    background: #dd4b39;
                }

                &:nth-child(4) span {
                    background: #0077b5;
                }

                &:nth-child(5) span {
                    background: #24292E;
                }

                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    transition: 0.5s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 30px;
                }
            }
        }
    }

</style>