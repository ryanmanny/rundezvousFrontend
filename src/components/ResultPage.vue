<template>
    <div v-bind:style="styleObject">

	<!--I think the go page should send you to a failure or success page
		Or figure out how to pass arguments to this ding butnger-->

	<div v-if="success">
		<p>You made it!</p>
		<p>Smiley face</p>
		<p>+1 Reputation</p>
	</div>

    <div v-else-if="!success">
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
			success: null
        }
    },
    mounted: function()
    {
		$.ajax(
			{
				//success goes from json to success variable yog
				url: '',
				method: 'GET',
				success: function()
				{

				},
				error: function()
				{

				}
			}
		)
    },
    methods: {
        
    }
}
</script>
