<script lang="ts">
	import TopAppBar, {
		Row,
		Section,
		Title,
		AutoAdjust
	} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import IconFileDownload from '~icons/mdi/file-download';
	import IconPrint from '~icons/mdi/printer';
	import IconBookmark from '~icons/mdi/bookmark';
	import IconMenu from '~icons/mdi/menu';

	export let topAppBar: TopAppBar;
	export let title: string;
</script>

<header>
	<TopAppBar bind:this={topAppBar} variant="standard">
		<Row>
			<Section>
				<IconButton class="material-icons"><IconMenu /></IconButton>
				<Title>{title}</Title>
			</Section>
			<Section align="end" toolbar>
				<IconButton class="material-icons" aria-label="Download">
					<IconFileDownload />
				</IconButton>
				<IconButton class="material-icons" aria-label="Print this page">
					<IconPrint />
				</IconButton>
				<IconButton class="material-icons" aria-label="Bookmark this page">
					<IconBookmark />
				</IconButton>
			</Section>
		</Row>
	</TopAppBar>
</header>

<style>
	/* Hide everything above this component. */
	:global(#smui-app),
	:global(body),
	:global(html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
</style>
