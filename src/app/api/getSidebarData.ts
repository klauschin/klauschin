export default async function getSidebarData() {
	const data = [
		{
			title: '首頁',
			slug: 'home',
			type: 'link',
			icon: 'home',
		},
		{
			title: '內容管理',
			type: 'navDropdown',
			icon: 'document',
			dropdownItems: [
				{
					title: '新增內容',
					slug: 'content-create',
					type: 'link',
				},
				{
					title: '我的內容',
					slug: 'content-mine',
					type: 'link',
				},
				{
					title: '歷史紀錄',
					slug: 'content-management-history',
					type: 'link',
				},
			],
		},
		{
			title: '內容審核',
			type: 'navDropdown',
			icon: 'content-moderation',
			dropdownItems: [
				{
					title: '全部內容',
					slug: 'content-all',
					type: 'link',
				},
				{
					title: '方案',
					slug: 'questions',
					type: 'link',
				},
				{
					title: '博文',
					slug: 'blog',
					type: 'link',
				},
				{
					title: '影片',
					slug: 'videos',
					type: 'link',
				},
			],
		},
	];
	return data;
}
