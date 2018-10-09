<template>
    <div class="sliding-body">
        <div class="sidebar-contact">
            <div class="sliding-body__toggle"><i class="fas fa-envelope text-white sliding-body__toggle--small"></i></div>
            <h2>Contact Us</h2>
            <form>
                <input type="text" name="" placeholder="Name">
                <input type="email" name="" placeholder="Email">
                <input type="rel" name="" placeholder="Phone Number">
                <textarea placeholder="Message"></textarea>
                <input type="submit" name="" placeholder="Send">
            </form>
        </div>
        <div class="sliding-body__banner"></div>
        <div class="sliding-body__content font-italic">

            <h2>This is Lorem</h2>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat<br>
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat<br>
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat<br>
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat<br>
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et<br>
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda<br>
            corporis, deleniti fuga neque quo totam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, eligendi sint. Deserunt doloremque et
            facere harum labore laudantium obcaecati repellat
            reprehenderit voluptates voluptatibus. Assumenda
            corporis, deleniti fuga neque quo totam!
        </div>
    </div>
</template>

<script>
  export default {
    name: "SlidingSiderForm"
  }
</script>

<style lang="scss" scoped>
    .sliding-body__banner {
        width: 100%;
        height: 100vh;
        background: url("../../../assets/form/greg-rakozy-38802-unsplash.jpg");
        background: {
            size: cover;
            attachment: fixed
        }
    }

    .sliding-body__content {
        padding: 5rem 10rem;
    }

    .sidebar-contact {
        position: fixed;
        top: 50%;
        left: -21rem;
        width: 21rem;
        transform: translateY(-50%);
        height: auto;
        padding: 2.5rem;
        background: #fff;
        box-shadow: 0 20px 50px rgba(0,0,0,.5);
        box-sizing: border-box;
        transition: 0.5s;

        &:hover {
            left: 0;
        }

        input, textarea {
            width: 100%;
            height: 2.3rem;
            padding: 5px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,.5);
            outline: none;
        }

        textarea {
            height: 3.75rem;
            resize: none;
        }

        input[type="submit"] {
            background: #00bcd4;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 18px;
            border-radius: 15px;
        }

        h2 {
            margin: 0 0 20px;
            padding: 0;
        }

        .sliding-body__toggle {
            position: absolute;
            line-height: 3rem;
            top: 0;
            right: -3rem;
            width: 3rem;
            height: 3rem;
            text-align: center;
            cursor: pointer;
            background: #f00;

            &--small {
                font-size: 18px;
            }
        }
    }
</style>
