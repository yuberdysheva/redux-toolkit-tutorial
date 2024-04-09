
import React, { useCallback } from 'react'

import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};


export const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emodji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => 
                        dispatch(reactionAdded({postId: post.id, reaction: name}))
                    }
                >
                {emodji} {post.reactions[name]}
            </button>
        );
    });

    return (
        <div>{reactionButtons}</div>
    )
};
