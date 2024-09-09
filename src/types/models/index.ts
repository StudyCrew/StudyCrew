// ./types/index.ts

export enum UserType {
  Student,
  Teacher
}

export enum NotificationCategory {
  GroupQuestion,
  GroupMaterial,
  PlatformUpdate
}

export enum GroupSubject {
  Math = "Math",
  English = "English",
  Science = "Science",
  SocialScience = "Social Science",
  ComputerScience = "Computer Science",
  Languages = "Languages",
  TestPrep = "Test Prep",
  Other = "Other",
  AllGroups = "All Groups"
}

export enum MaterialType {
  GoogleDoc,
  GoogleSlides,
  GoogleSheet,
  Word,
  Powerpoint,
  Excel,
  YouTube,
  Website
}
