## Schema
type User = {
    id: ObjectId;
    name: string;
    userType: UserType; 
    email: string;
    about: string;
    avatar: string;
    isTutor: boolean;
    settings: UserSettings;
    notifications: Notification[];
    groupsJoined: ObjectId[]; // Array of group ObjectIds
    groupsCreated: ObjectId[]; // Array of group ObjectIds
};

enum UserType {
    Student,
    Teacher
}

type UserSettings = {
    emailNotifications: boolean;
    showGroups: boolean;
};

enum NotificationCategory {
    GroupQuestion,
    GroupMaterial,
    PlatformUpdate
}

type Notification = {
    id: ObjectId;
    category: NotificationCategory;
    createdAt: Date;
    title: string;
    content: string;
    read: boolean;
};

type Message = {
    id: ObjectId;
    content: string;
    groupId: ObjectId;
    user: ObjectId; // user ObjectId
    createdAt: Date;
};

type MessageReport {
    id: ObjectId;
    messageId: ObjectId;
    note: string;
}

enum GroupSubject {
    Math,
    English,
    Science,
    SocialScience,
    ComputerScience,
    Language,
    TestPrep,
    Other
}

type Group = {
    id: ObjectId;
    name: string;
    adminId: ObjectId; // User ObjectId of person who created the group
    description: string;
    subject: GroupSubject;
    members: ObjectId[]; // Array of user ObjectIds
    bannerImage: string;
    qna: Question[];
    messages: Message[];
    materialFolders: Folder[];
    materials: Material[];
};

type Folder = {
    id: ObjectId;
    name: string;
    createdAt: Date;
};

enum MaterialType {
    GoogleDoc,
    GoogleSlides,
    GoogleSheet,
    Word,
    Powerpoint,
    Excel,
    YouTube,
    Website
}

type Material = {
    id: ObjectId;
    name: string;
    type: MaterialType;
    folder: ObjectId; // Reference to Folder ObjectId
    link: string;
    createdAt: Date;
};

type Question = {
    id: ObjectId;
    title: string;
    content: string;
    user: ObjectId; // user ObjectId
    comments: QuestionComment[];
    upvotes: number;
    createdAt: Date;
};

type QuestionComment = {
    id: ObjectId;
    content: string;
    user: ObjectId; // user ObjectId
    createdAt: Date;
};


## Examples
const user = {
    id: new ObjectId(),
    name: "Alice Johnson",
    userType: UserType.Student,
    email: "alice.johnson@example.com",
    about: "Passionate about computer science and math.",
    avatar: "https://api.dicebear.com/9.x/big-ears/svg?seed=Alice",
    isTutor: false,
    settings: {
        emailNotifications: true,
        showGroups: true
    },
    notifications: [
        {
            id: new ObjectId(),
            category: NotificationCategory.GroupQuestion,
            createdAt: new Date(),
            title: "New Question in Math Group",
            content: "A new question has been posted in your Math group.",
            read: false
        }
    ],
    groupsJoined: [new ObjectId(), new ObjectId()],
    groupsCreated: [new ObjectId()]
};

const userTypeStudent = UserType.Student;
const userTypeTeacher = UserType.Teacher;

const userSettings = {
    emailNotifications: true,
    showGroups: false
};

const notificationCategory = NotificationCategory.PlatformUpdate;

const notification = {
    id: new ObjectId(),
    category: NotificationCategory.GroupMaterial,
    createdAt: new Date(),
    title: "New Material in Science Group",
    content: "A new material has been added to your Science group.",
    read: true
};

const message = {
    id: new ObjectId(),
    content: "This is a sample message content.",
    groupId: new ObjectId(),
    user: new ObjectId(),
    createdAt: new Date()
};

const messageReport = {
    id: new ObjectId(),
    messageId: new ObjectId(),
    note: "Inappropriate content reported."
};

const groupSubject = GroupSubject.ComputerScience;

const group = {
    id: new ObjectId(),
    name: "Advanced Math Group",
    adminId: new ObjectId(),
    description: "A group for discussing advanced math topics.",
    subject: GroupSubject.Math,
    members: [new ObjectId(), new ObjectId()],
    bannerImage: "https://api.unsplash.com/photos/random?query=study-group&client_id=UNSPLASH_ACCESS_KEY",
    qna: [
        {
            id: new ObjectId(),
            title: "What is the Riemann Hypothesis?",
            content: "Can someone explain the Riemann Hypothesis?",
            user: new ObjectId(),
            comments: [
                {
                    id: new ObjectId(),
                    content: "It's a conjecture about the distribution of prime numbers.",
                    user: new ObjectId(),
                    createdAt: new Date()
                }
            ],
            upvotes: 10,
            createdAt: new Date()
        }
    ],
    messages: [
        {
            id: new ObjectId(),
            content: "Welcome to the Advanced Math Group!",
            groupId: new ObjectId(),
            user: new ObjectId(),
            createdAt: new Date()
        }
    ],
    materialFolders: [
        {
            id: new ObjectId(),
            name: "Lecture Notes",
            createdAt: new Date()
        }
    ],
    materials: [
        {
            id: new ObjectId(),
            name: "Week 1 Lecture Notes",
            type: MaterialType.GoogleDoc,
            folder: new ObjectId(),
            link: "https://docs.google.com/document/d/1abcd1234",
            createdAt: new Date()
        }
    ]
};

const folder = {
    id: new ObjectId(),
    name: "Assignments",
    createdAt: new Date()
};

const materialType = MaterialType.YouTube;

const material = {
    id: new ObjectId(),
    name: "Introduction to Quantum Computing",
    type: MaterialType.YouTube,
    folder: new ObjectId(),
    link: "https://www.youtube.com/watch?v=abcd1234",
    createdAt: new Date()
};

const question = {
    id: new ObjectId(),
    title: "How does machine learning work?",
    content: "Can someone explain the basics of machine learning?",
    user: new ObjectId(),
    comments: [
        {
            id: new ObjectId(),
            content: "Machine learning is a method of data analysis that automates analytical model building.",
            user: new ObjectId(),
            createdAt: new Date()
        }
    ],
    upvotes: 5,
    createdAt: new Date()
};

const questionComment = {
    id: new ObjectId(),
    content: "It's a type of AI that enables computers to learn from data.",
    user: new ObjectId(),
    createdAt: new Date()
};