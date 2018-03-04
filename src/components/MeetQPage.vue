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
                fontSize: '14'
            },
            time: 5,
            mac: null
        }
    },
    mounted: function()
    {    
        this.decrementTime();
        this.mac = localStorage.getItem('mac');
    },
    methods: {
        accept: function() {
            alert("MEETING PAGE GOOOOOO");
            //Post positive result to API
            $.ajax(
                {
                    url: 'rundezvous.wsu.party/user/submit-meet-answer?mac=' + this.mac + '',
                    method: 'POST',
                    success: function()
                    {

                    },
                    error: function()
                    {

                    }
            })
            this.$emit("switch-view", "meeting-page");
        },
        deny: function() {
            alert("MAIN PAGE GOOOOOO");
            //Post negative result to API
            $.ajax(
                {
                    url: 'rundezvous.wsu.party/user/submit-meet-answer?mac=' + this.mac + '',
                    method: 'POST',
                    success: function()
                    {

                    },
                    error: function()
                    {

                    }
            })
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