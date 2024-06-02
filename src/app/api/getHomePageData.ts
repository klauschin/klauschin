import type { HomePage } from '@/types';

const testData = {
	heading: '首頁',
	slug: '/',
	content: {
		type: 'module',
		module: [
			{
				title: '待審文章',
				icon: '',
				type: 'bannerNumbers',
				content: [
					{
						title: '方案',
						number: '10',
					},
					{
						title: '博文',
						number: '10',
					},
					{
						title: '影片',
						number: '10',
					},
					{
						title: '原廠新聞',
						number: '10',
					},
				],
			},
			{
				title: '我的待審清單',
				cta: [
					{
						label: '審核文章',
						icon: '',
						link: '/',
					},
				],
				icon: '',
				type: 'contentTabs',
				content: [
					{
						tabTitle: '全部',
						list: [
							{
								tag: '博文',
								type: 'blog',
								title: '博文 標題 1',
								subTitle: 'ABC 於 10 秒前上傳',
							},
							{
								tag: '方案',
								type: 'question',
								title: '方案 標題 2',
								subTitle: 'ABC 於 10 秒前上傳',
							},
							{
								tag: '方案',
								type: 'question',
								title: '方案 標題 2',
								subTitle: 'ABC 於 10 秒前上傳',
							},
							{
								tag: '方案',
								type: 'question',
								title: '方案 標題 2',
								subTitle: 'ABC 於 10 秒前上傳',
							},
						],
					},
					{
						tabTitle: '方案',
						list: [
							{
								tag: '方案',
								type: 'question',
								title: '方案 標題 1',
								subTitle: 'ABC 於 10 秒前上傳',
							},
							{
								tag: '方案',
								type: 'question',
								title: '方案 標題 2',
								subTitle: 'ABC 於 10 秒前上傳',
							},
						],
					},
				],
			},
		],
	},
};
export async function getHomePageData() {
	const res = await fetch(`${process.env.SITE_URL}/api/test-api`);

	if (!res.ok) {
		// Render the closest `error.js` Error Boundary
		throw new Error('Something went wrong!');
	}

	const data = testData as HomePage;
	return data;
}
