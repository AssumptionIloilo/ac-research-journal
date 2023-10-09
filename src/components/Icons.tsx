type IconType = {
  className?: string;
};

export const Icons = {
  star1: ({ ...className }: IconType) => (
    <svg {...className} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M75.0001 0C75.3702 9.94858 73.6835 19.8665 70.0453 29.1334C66.4072 38.4003 60.896 46.8168 53.8564 53.8564C46.8168 60.8959 38.4003 66.4072 29.1334 70.0453C19.8665 73.6834 9.94859 75.3701 0 75C9.94859 74.6299 19.8665 76.3166 29.1334 79.9547C38.4003 83.5928 46.8168 89.104 53.8564 96.1436C60.896 103.183 66.4072 111.6 70.0453 120.867C73.6835 130.133 75.3702 140.051 75.0001 150C74.6299 140.051 76.3166 130.133 79.9547 120.867C83.5928 111.6 89.104 103.183 96.1436 96.1436C103.183 89.1041 111.6 83.5928 120.867 79.9547C130.133 76.3166 140.051 74.6299 150 75C140.051 75.3701 130.133 73.6834 120.867 70.0453C111.6 66.4072 103.183 60.8959 96.1436 53.8564C89.104 46.8168 83.5928 38.4003 79.9547 29.1334C76.3166 19.8665 74.6299 9.94858 75.0001 0Z"
        fill="#040499"
      />
      <path
        d="M75.0001 0C75.3702 9.94858 73.6835 19.8665 70.0453 29.1334C66.4072 38.4003 60.896 46.8168 53.8564 53.8564C46.8168 60.8959 38.4003 66.4072 29.1334 70.0453C19.8665 73.6834 9.94859 75.3701 0 75C9.94859 74.6299 19.8665 76.3166 29.1334 79.9547C38.4003 83.5928 46.8168 89.104 53.8564 96.1436C60.896 103.183 66.4072 111.6 70.0453 120.867C73.6835 130.133 75.3702 140.051 75.0001 150C74.6299 140.051 76.3166 130.133 79.9547 120.867C83.5928 111.6 89.104 103.183 96.1436 96.1436C103.183 89.1041 111.6 83.5928 120.867 79.9547C130.133 76.3166 140.051 74.6299 150 75C140.051 75.3701 130.133 73.6834 120.867 70.0453C111.6 66.4072 103.183 60.8959 96.1436 53.8564C89.104 46.8168 83.5928 38.4003 79.9547 29.1334C76.3166 19.8665 74.6299 9.94858 75.0001 0Z"
        fill="#7051EB"
      />
    </svg>
  ),
  star2: ({ ...className }: IconType) => (
    <svg {...className} viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42.5 0C42.7098 5.63753 41.754 11.2577 39.6924 16.5089C37.6308 21.7602 34.5077 26.5295 30.5186 30.5186C26.5295 34.5077 21.7602 37.6307 16.5089 39.6923C11.2577 41.7539 5.63753 42.7097 0 42.5C5.63753 42.2902 11.2577 43.2461 16.5089 45.3077C21.7602 47.3693 26.5295 50.4923 30.5186 54.4814C34.5077 58.4705 37.6308 63.2398 39.6924 68.4911C41.754 73.7423 42.7098 79.3625 42.5 85C42.2903 79.3625 43.2461 73.7423 45.3077 68.4911C47.3693 63.2398 50.4923 58.4705 54.4814 54.4814C58.4705 50.4923 63.2398 47.3693 68.4911 45.3077C73.7423 43.2461 79.3625 42.2902 85 42.5C79.3625 42.7097 73.7423 41.7539 68.4911 39.6923C63.2398 37.6307 58.4705 34.5077 54.4814 30.5186C50.4923 26.5295 47.3693 21.7602 45.3077 16.5089C43.2461 11.2577 42.2903 5.63753 42.5 0Z"
        fill="#040499"
      />
    </svg>
  ),
  star3: ({ ...className }: IconType) => (
    <svg {...className} viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M68.551 0C68.8894 9.09314 67.3477 18.1583 64.0224 26.6283C60.6971 35.0984 55.6597 42.7912 49.2255 49.2255C42.7912 55.6597 35.0984 60.6971 26.6283 64.0224C18.1583 67.3476 9.09314 68.8894 0 68.551C9.09314 68.2127 18.1583 69.7544 26.6283 73.0797C35.0984 76.405 42.7912 81.4423 49.2255 87.8766C55.6597 94.3109 60.6971 102.004 64.0224 110.474C67.3477 118.944 68.8894 128.009 68.551 137.102C68.2127 128.009 69.7544 118.944 73.0797 110.474C76.405 102.004 81.4423 94.3109 87.8765 87.8766C94.3108 81.4423 102.004 76.405 110.474 73.0797C118.944 69.7544 128.009 68.2127 137.102 68.551C128.009 68.8894 118.944 67.3476 110.474 64.0224C102.004 60.6971 94.3108 55.6597 87.8765 49.2255C81.4423 42.7912 76.405 35.0984 73.0797 26.6283C69.7544 18.1583 68.2127 9.09313 68.551 0Z"
        fill="#C3A500"
      />
    </svg>
  ),
};
