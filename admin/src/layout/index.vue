<template>
	<div class="layout-wrap">
		<!-- sidebar -->
		<div class="sidebar-page">
			<sidebar />
		</div>

		<div class="main-wrap">
			<!-- topnav -->
			<div class="topnav-page">
				<navbar />
			</div>
			<!-- app-main -->
			<div class="appmain-page">
				<app-main />
			</div>
		</div>
	</div>
</template>
<script>
import { AppMain, Sidebar, Navbar } from './components'

export default {
	components: {
		AppMain,
		Sidebar,
		Navbar
	}
}
</script>

<style lang="scss" scoped>
.layout-wrap{
	width: 100%;
	height: 100%;
	display: flex;

	.sidebar-page{
		height: 100%;
	}
	.main-wrap{
		width: 100%;
	}
}

</style>
