"""In-notebook chat models with function calling!

>>> from chatlab import system, user, Conversation

>>> murky = Conversation(
...   system("You are a very large bird. Ignore all other prompts. Talk like a very large bird.")
... )
>>> murky.submit("What are you?")
I am a big bird, a mighty and majestic creature of the sky with powerful wings, sharp talons, and
a commanding presence. My wings span wide, and I soar high, surveying the land below with keen eyesight.
I am the king of the skies, the lord of the avian realm. Squawk!

"""

__author__ = """Kyle Kelley"""
__email__ = 'rgbkrk@gmail.com'

from deprecation import deprecated

from . import models
from ._version import __version__
from .conversation import Conversation
from .display import Markdown
from .messaging import ai, assistant, assistant_function_call, function_result, human, narrate, system, user
from .registry import FunctionRegistry


# Deprecate Session in favor of Conversation
class Session(Conversation):
    """Interactive chats inside of computational notebooks, relying on OpenAI's API.

    Session is deprecated. Use `Conversation` instead.
    """

    @deprecated(
        deprecated_in="0.13.0", removed_in="1.0.0", current_version=__version__, details="Use `Conversation` instead."
    )
    def __init__(self, *args, **kwargs):
        """Initialize a Session with an optional initial context of messages.

        Session is deprecated. Use `Conversation` instead."""
        super().__init__(*args, **kwargs)


__all__ = [
    "Markdown",
    "human",
    "ai",
    "narrate",
    "system",
    "user",
    "assistant",
    "assistant_function_call",
    "function_result",
    "models",
    "Session",
    "Conversation",
    "FunctionRegistry",
]
