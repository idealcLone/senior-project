from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from telegram import Update
from telegram.ext import CallbackContext, Updater, CommandHandler, MessageHandler, Filters


def login(update, context):
    credentials = update.message.text[6:].strip()
    email = credentials.split(':')[0]
    password = credentials.split(':')[1]

    try:
        u = get_user_model().objects.get(email=email)
        if u.check_password(password):
            # u.tg_chat_id = update.message.chat.id
            update.message.reply_text(u.email)
        else:
            update.message.reply_text('Incorrect password')
    except ObjectDoesNotExist:
        update.message.reply_text('Incorrect email')


updater = Updater('5268558156:AAHaRqIpIMt1SrfKn_uRRYP8763vFe75gSY')
dispatcher = updater.dispatcher

dispatcher.add_handler(CommandHandler('login', login))


def start():
    updater.start_polling()

