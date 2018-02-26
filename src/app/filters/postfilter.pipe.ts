import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/Post';

@Pipe({
    name: 'postFilter'
})

export class PostFilterPipe implements PipeTransform {
    transform(posts: Post[], userId: number): any[] {
        if (!posts) return [];
        if (!userId) return posts;
        return posts.filter(it => {
            return userId == it.userId;
        });
    }
}