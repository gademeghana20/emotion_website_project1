from flask import Flask, render_template, request

app = Flask(__name__)

quotes = {
    "happy": [
        "Happiness is not by chance, but by choice.",
        "Stay positive and happy.",
        "Smile — it’s free therapy.",
        "Joy is contagious — spread it.",
        "Do what makes your soul shine."
    ],
    "sad": [
        "Tears are words the heart can’t express.",
        "Even the darkest night will end and the sun will rise.",
        "Sadness flies away on the wings of time.",
        "Crying doesn’t mean you’re weak.",
        "Pain makes you stronger."
    ],
    "angry": [
        "For every minute you are angry, you lose sixty seconds of happiness.",
        "Control your anger before it controls you.",
        "Stay calm and prove them wrong.",
        "Let your anger teach you, not destroy you.",
        "Peace begins where anger ends."
    ],
    "excited": [
        "The energy of excitement fuels greatness.",
        "Let your enthusiasm shine!",
        "Life is full of surprises — embrace them.",
        "Be so excited that others catch your vibe.",
        "Adventure begins with excitement."
    ],
    "relaxed": [
        "Relax. Breathe. Let go.",
        "Peace is found within.",
        "A calm mind brings inner strength.",
        "Slow down and enjoy the simple things.",
        "Tranquility is the true luxury."
    ]
}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/emotion', methods=['POST'])
def emotion_page():
    emotion = request.form.get('emotion', '').strip().lower()
    if not emotion or emotion not in quotes:
        # fallback: show friendly message on same result page
        return render_template('result.html', emotion="unknown", quotes=["Sorry — I don't have data for that emotion. Try: happy, sad, angry, excited, or relaxed."])
    return render_template('result.html', emotion=emotion, quotes=quotes[emotion])


if __name__ == '__main__':
    app.run(debug=True)
