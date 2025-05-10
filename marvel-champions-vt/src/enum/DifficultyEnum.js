const DifficultyEnum = {
    Normal: "A",
    Expert: "B",
    SuperEasy: "C"
}

class DifficultyHelper {
    getImageLetter = function (difficulty) {
        switch (difficulty) {
            case DifficultyEnum.Normal:
                return 'A';
            case DifficultyEnum.Expert:
                return 'B';
            default:
                return '';
        }
    }

    getDifficultyName = function (difficulty) {
        switch (difficulty) {
            case DifficultyEnum.Normal:
                return 'Normal';
            case DifficultyEnum.Expert:
                return 'Expert';
            default:
                return '';
        }
    }
}

export {DifficultyEnum, DifficultyHelper};