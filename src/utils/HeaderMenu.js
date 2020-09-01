const headerMenu = [
    {
        label: "Trang chủ",
        to: "/",
        exact: true,
        priority: 1
    },
    {
        label: "Cuộc thi",
        to: "/competition/1",
        exact: false,
        priority: 2
    },

    {
        label: "Khóa học",
        to: "/course/1",
        exact: true,
        priority: 3
    },
    {
        label: "Sự kiện",
        to: "/events",
        exact: false,
        priority: 5
    },
    {
        label: "Tin tức",
        to: "/news",
        exact: false,
        priority: 6
    },
    {
        label: "Giới thiệu",
        to: "/introduce",
        exact: false,
        priority: 7
    },
    {
        label: "Hỗ trợ",
        to: "/support",
        exact: false,
        priority: 8
    }, {
        label: "Tài liệu",
        to: "/documents",
        exact: false,
        priority: 4
    }
]
export default headerMenu