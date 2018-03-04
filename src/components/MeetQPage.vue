<template>
    <div v-bind:style="styleObject">
        <p>TIME: {{time}}</p>
        <p>TIMES UP</p>
        <p>WANT TO MEET?</p>
        <div>
            <a href="#" v-on:click="accept">YES</a>
            <a href="#" v-on:click="deny">NO</a>
        </div>
    </div>
</template>

<script>

module.exports = {
    data: function () {
        return {
            styleObject: {
                color: 'red',
                fontSize: '900'
            },
            time: 5
        }
    },
    mounted: function()
    {    
        this.decrementTime();
    },
    methods: {
        accept: function() {
            alert("MEETING PAGE GOOOOOO");
            this.$emit("switch-view", "meeting-page");
        },
        deny: function() {
            alert("MAIN PAGE GOOOOOO");
            this.$emit("switch-view", "main-page");
        },
        decrementTime: function() {
            //alert("Counting down loser");
            if (this.time > 0)
            {
                this.time = this.time - 1;
                
                setTimeout(function () {this.decrementTime()}.bind(this), 1000);
            }
            else
            {
                this.deny();
            }
        }
    }
}
</script>
