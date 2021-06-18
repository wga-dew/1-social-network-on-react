const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, how are you?", likeCount: 1 },
      { id: 2, message: "Hi, im okey", likeCount: 5 },
      { id: 3, message: "Fine", likeCount: 3 },
    ]
  },
  dialogsPage: {
    dialogData: [
      { id: 1, name: "Gleb" },
      { id: 2, name: "Den" },
      { id: 3, name: "Ben" },
      { id: 4, name: "Yan" },
      { id: 5, name: "John" },
      { id: 6, name: "Lena" },
    ],
    messagesData: [
      { id: 1, message: "Hello, how do you do" },
      { id: 2, message: "Hello, im okey" },
      { id: 3, message: "Good" },
    ],
  }
};

export default state;