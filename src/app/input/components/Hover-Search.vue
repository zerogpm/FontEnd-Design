<template>
    <div class="container-fluid">
        <div class="row justify-content-center align-items-center row--height container-fluid__background--orange">
            <div class="col-sm-10 text-center">
                <div class="hover-search-box">
                    <input class="hover-search-box__input" type="text" name="" placeholder="Type to search">
                    <a class="hover-search-box__search-btn" href="#">
                        <i class="fas fa-search"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Hover-Search"
  }
</script>

<style lang="scss" scoped>
    .row--height {
        height: 100vh
    }

    .container-fluid__background--orange {
        background: #e84118;
    }

    .hover-search-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #2f3640;
        height: 40px;
        border-radius: 40px;
        padding: 10px;

        &__search-btn {
            color: #e84118;
            float: right;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(10px, -10px);
            text-decoration: none;
        }

        &:hover > &__search-btn {
            background: white;
        }

        &__input {
            border: none;
            background: none;
            outline: none;
            float: left;
            color: white;
            font-size: 16px;
            transition: 0.4s;
            line-height: 20px;
            width: 0;
            transform: translate(5px,-1px);
        }

        &:hover > &__input {
            width: 240px;
            padding: 0 6px;
        }
    }
</style>
