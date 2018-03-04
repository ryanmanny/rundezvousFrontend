<template>
    <div v-bind:style="styleObject">

	<!--I think the go page should send you to a failure or success page
		Or figure out how to pass arguments to this ding butnger-->

	<div v-if="success">
		<p>You made it!</p>
		<p>Smiley face</p>
		<p>+1 Reputation</p>
	</div>

    <div v-else>
		<!--Reputation should be pulled from server-->
		<p>You blew it!</p>
		<p>Frowney face</p>
		<p>-100 Reputation</p>
	</div>

    </div>
</template>

<script>

module.exports = {
    data: function () {
        return {
            success: true
        }
    },
    mounted: function()
    {
		
    },
    methods: {
        
    }
}
</script>
