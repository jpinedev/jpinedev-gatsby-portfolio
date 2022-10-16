import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SkeletonLoader from 'tiny-skeleton-loader-react';
import { Theme, useGlobalState } from '../../context';
import { ArticlePreviewData } from './data'
import * as classes from './style.module.css';

export interface ArticleCard extends ArticlePreviewData { }

interface ArticleCardProps {
    data: ArticleCard;
    showBanner?: boolean;
}

export function ArticleCard(props: ArticleCardProps): React.ReactElement {
    const { globalState } = useGlobalState();
    const darkModeEnabled = globalState.theme === Theme.Dark;

    // Needed to differentiate between external and internal links (whether or not we use Gatsby Link)
    const absoluteUrl = props.data.slug.indexOf('://') > 0 || props.data.slug.indexOf('//') === 0;

    const articleCard = (
        <article
            className={classes.Card}
            style={darkModeEnabled ? { border: '0.125rem solid var(--primary-color)' } : undefined}
        >
            {props.showBanner && (
                <div className={classes.Banner}>
                    {props.data.banner && props.data.banner.src && (
                        <GatsbyImage
                            className={classes.ImageWrapper}
                            imgClassName={classes.Image}
                            image={props.data.banner.src.childImageSharp.gatsbyImageData}
                            alt={props.data.banner.alt || props.data.title}
                        />
                    )}
                </div>
            )}
            <div className={classes.DescriptionWrapper}>
                <h3 className={classes.Title}>{props.data.title}</h3>
                <p className={classes.Description}>{props.data.description}</p>
                <div className={classes.Details}>
                    {formatDate(new Date(props.data.date))}
                </div>
                <span className={classes.Categories}>
                    {props.data.categories.length > 0 &&
                        props.data.categories.map((category, key) => (
                            <u className={classes.Category} key={key}>
                                {category}
                            </u>))}
                </span>
                <span className={classes.LearnMore}>
                    <u>Learn more...</u>
                </span>
            </div>
        </article>
    );

    return absoluteUrl ? (
        <a className={classes.CardLink} href={props.data.slug} target="_blank" rel="nofollow noopener noreferrer" title={props.data.title}>
            {articleCard}
        </a>
    ) : (
        <Link className={classes.CardLink} to={props.data.slug} title={props.data.title}>
            {articleCard}
        </Link>
    );
}

export function ArticleCardSkeleton(): React.ReactElement {
    const { globalState } = useGlobalState();
    const darkModeEnabled = globalState.theme === Theme.Dark;
    return (
        <div
            className={classes.Card}
            style={darkModeEnabled ? { border: '0.125rem solid var(--primary-color)' } : undefined}
        >
            <div className={classes.DescriptionWrapper}>
                <SkeletonLoader
                    style={{
                        height: '1.5rem',
                        marginBottom: '.5rem',
                        background: 'var(--tertiary-color)',
                    }}
                />
                <SkeletonLoader style={{ height: '4rem', background: 'var(--tertiary-color)' }} />
                <SkeletonLoader
                    style={{
                        height: '.75rem',
                        width: '50%',
                        marginTop: '.5rem',
                        background: 'var(--tertiary-color)',
                    }}
                />
            </div>
        </div>
    );
}

function formatDate(date: Date): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
