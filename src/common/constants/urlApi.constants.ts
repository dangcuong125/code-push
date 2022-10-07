export const BASE_URL =
  'http://clevertube-dev-alb-1086634962.ap-northeast-1.elb.amazonaws.com';
// 'http://localhost:3000';

export const LOGIN_POST = '/client/login';
export const REGISTER_POST = '/client/register';
export const GET_ALL_LEVELS = '/client/levels';
export const GET_ALL_TOPICS = '/client/topics';
export const POST_LEVEL_TOPIC = '/client/choose-level-topics';
export const GET_PODCAST_LIST = '/audio';
export const GET_VIDEO_LIST = '/client/videos';
export const GET_VIDEO_LIST_FEATURE = '/client/videos/feature';
export const GET_AUDIO_DETAIL = '/audio/';
export const GET_SEARCH_RESULT = '/client/search/contents';
export const GET_POPULAR_TOPICS = '/client/topics/feature';
export const GET_INFO_USER = '/client/info';
export const POST_INFO_USER = '/client/update-info';
export const POST_FILE_PRESIGN = '/file/presigned-url';
export const GET_SEARCH_HISTORY = '/client/search/history';
export const DELETE_SEARCH_HISTORY = '/client/search';
export const CREATE_NEW_FOLDER_FOR_SAVING_WORD = '/user-save-words/group';
export const USER_SAVES_WORD = '/user-save-words/word';
export const ADMIN_DICTIONARY = '/admin/dictionaries';
export const USER_SAVE_MEDIA = '/user-save-media';
export const GAME_CHOOSE_RIGHT_WORD_AMOUNT_QUESTION =
  '/game/choose-right-word/question/';
export const GAME_CHOOSE_RIGHT_WORD_RESULT = '/game/choose-right-word/result';
export const GAME_CHOOSE_RIGHT_WORD_GET_RIGHT_ANSWER =
  '/game/choose-right-word/answer';
export const GAME_DRAG_WORD_AMOUNT_QUESTION =
  '/game/complete-sentence/question';
export const GAME_DRAG_WORD_GET_CORRECT_ANSWER =
  '/game/complete-sentence/answer';
