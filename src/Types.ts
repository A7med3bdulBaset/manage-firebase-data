export type TeacherType = {
	tutor_id: string;
	tutor_name: string;
	thumbnail_img_local_path: string;
	thumbnail_img_url: string;
	tutor_country: string;
	tutor_teaches: string;
	is_newly_joined: Boolean;
	languages: string;
	lesson_duration: string;
	lessons: number;
	n_of_reviews: number;
	price: string;
	description: string;
	students: number;

	gender?: string;
	rating?: string;
	ethnicity?: string;
};
