// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Logo Clientes documents */
interface LogoClientesDocumentData {
    /**
     * Nome do Cliente field in *Logo Clientes*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_clientes.nome_do_cliente
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nome_do_cliente: prismicT.KeyTextField;
    /**
     * Logo field in *Logo Clientes*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_clientes.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Logo Clientes document from Prismic
 *
 * - **API ID**: `logo_clientes`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LogoClientesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<LogoClientesDocumentData>, "logo_clientes", Lang>;
/** Content for Videos Youtube documents */
interface VideosYoutubeDocumentData {
    /**
     * Título do Trabalho field in *Videos Youtube*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: videos_youtube.titulo_do_trabalho
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    titulo_do_trabalho: prismicT.KeyTextField;
    /**
     * Link do Vídeo field in *Videos Youtube*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: videos_youtube.link_do_video
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_do_video: prismicT.LinkField;
}
/**
 * Videos Youtube document from Prismic
 *
 * - **API ID**: `videos_youtube`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VideosYoutubeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<VideosYoutubeDocumentData>, "videos_youtube", Lang>;
export type AllDocumentTypes = LogoClientesDocument | VideosYoutubeDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { LogoClientesDocumentData, LogoClientesDocument, VideosYoutubeDocumentData, VideosYoutubeDocument, AllDocumentTypes };
    }
}
