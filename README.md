<!-- 
# Gutenberg
-->
# ブロックエディターハンドブック翻訳作業用リポジトリ

これは[ブロックエディターハンドブック 日本語版](https://ja.wordpress.org/team/handbook/block-editor/)の翻訳ファイル用リポジトリです。

## 日本語訳への質問やコメント

[Issues](https://github.com/jawordpressorg/gutenberg/issues) から新しい issue を作成してください。[こちら](https://github.com/jawordpressorg/gutenberg/issues/new) のリンクをクリックしても作成できます。

画面は英語ですが、日本語を入力できます。

## 日本語翻訳のワークフロー

Takayuki Miyauchi さんの発案された翻訳方式を採用して、ブロックエディターハンドブックのドキュメントを翻訳しています。
https://qiita.com/miya0001/items/4745cf900a66c0bbf8e5

最初の1回だけ
```
% git clone git@github.com:jawordpressorg/gutenberg.git
% cd gutenberg
% git remote add upstream https://github.com/WordPress/gutenberg.git
```
あとは定期的に
```
% git fetch upstream
% git merge upstream/trunk
```

ここですべてのファイルがマージされる場合でも、どこが変更されたかチェックし、手動で反映する必要があります (例: コードが変更された場合)。画面の出力から「.md」ファイルを抽出して変更一覧を取得します。

すべてのファイルがマージされなかった場合は、以下のコマンドで変更されたファイルの一覧を取得します。
```
% git status | grep \.md | grep -v CHANGELOG
```

変更ファイルの一覧を取得したら、GitHub で最近の変更を確認しながら、日本語版に反映します。
```
% git add -A
% git commit -m "Synched with the latest"
% git push
```
<!--
[![End-to-End Tests](https://github.com/WordPress/gutenberg/workflows/End-to-End%20Tests/badge.svg)](https://github.com/WordPress/gutenberg/actions?query=workflow%3A%22End-to-End+Tests%22+branch%3Atrunk)
[![Static Analysis (Linting, License, Type checks...)](<https://github.com/WordPress/gutenberg/workflows/Static%20Analysis%20(Linting,%20License,%20Type%20checks...)/badge.svg>)](https://github.com/WordPress/gutenberg/actions?query=workflow%3A%22Static+Analysis+%28Linting%2C+License%2C+Type+checks...%29%22+branch%3Atrunk)
[![Unit Tests](https://github.com/WordPress/gutenberg/workflows/Unit%20Tests/badge.svg)](https://github.com/WordPress/gutenberg/actions?query=workflow%3A%22Unit+Tests%22+branch%3Atrunk)
[![Create Block](https://github.com/WordPress/gutenberg/workflows/Create%20Block/badge.svg)](https://github.com/WordPress/gutenberg/actions?query=workflow%3A%22Create+Block%22+branch%3Atrunk)
[![React Native E2E Tests (iOS)](<https://github.com/WordPress/gutenberg/workflows/React%20Native%20E2E%20Tests%20(iOS)/badge.svg>)](https://github.com/WordPress/gutenberg/actions?query=workflow%3A%22React+Native+E2E+Tests+%28iOS%29%22+branch%3Atrunk)
[![React Native E2E Tests (Android)](<https://github.com/WordPress/gutenberg/workflows/React%20Native%20E2E%20Tests%20(Android)/badge.svg>)](https://github.com/WordPress/gutenberg/actions?query=workflow%3A%22React+Native+E2E+Tests+%28Android%29%22+branch%3Atrunk)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org)

![Screenshot of the Gutenberg Editor, editing a post in WordPress](https://user-images.githubusercontent.com/1204802/100067796-fc3e8700-2e36-11eb-993b-6b80b4310b87.png)

Welcome to the development hub for the WordPress Gutenberg project!

"Gutenberg" is a codename for a whole new paradigm in WordPress site building and publishing, that aims to revolutionize the entire publishing experience as much as Gutenberg did the printed word. Right now, the project is in the second phase of a four-phase process that will touch every piece of WordPress -- Editing, **Customization** (which includes Full Site Editing, Block Patterns, Block Directory and Block based themes), Collaboration, and Multilingual -- and is focused on a new editing experience, the block editor.

The block editor introduces a modular approach to pages and posts: each piece of content in the editor, from a paragraph to an image gallery to a headline, is its own block. And just like physical blocks, WordPress blocks can be added, arranged, and rearranged, allowing WordPress users to create media-rich pages in a visually intuitive way -- and without work-arounds like shortcodes or custom HTML.

The block editor first became available in December 2018, and we're still hard at work refining the experience, creating more and better blocks, and laying the groundwork for the next three phases of work. The Gutenberg plugin gives you the latest version of the block editor so you can join us in testing bleeding-edge features, start playing with blocks, and maybe get inspired to build your own.

Check out the [Ways to keep up with Gutenberg & Full Site Editing (FSE)](https://make.wordpress.org/core/2020/05/20/ways-to-keep-up-with-full-site-editing-fse/)

## Getting Started

Get hands on: check out the [block editor live demo](https://wordpress.org/gutenberg/) to play with a test instance of the editor.

### Using Gutenberg

-   **Download:** To use the latest release of the Gutenberg plugin on your WordPress site: install from the plugins page in wp-admin, or [download from the WordPress.org plugins repository](https://wordpress.org/plugins/gutenberg/).

-   **User Documentation:** See the [WordPress Editor documentation](https://wordpress.org/support/article/wordpress-editor/) for detailed docs on using the editor as an author creating posts and pages.

-   **User Support:** If you have run into an issue, you should check the [Support Forums first](https://wordpress.org/support/forums/). The forums are a great place to get help. If you have a bug to report, please [submit it to the Gutenberg repository](https://github.com/wordpress/gutenberg/issues). Please search prior to creating a new bug to confirm its not a duplicate.

### Developing for Gutenberg

Extending and customizing is at the heart of the WordPress platform, this is no different for the Gutenberg project. The editor and future products can be extended by third-party developers using plugins.

Review the [Create a Block tutorial](/docs/getting-started/create-block/README.md) for the fastest way to get started extending the block editor. See the [Developer Documentation](https://developer.wordpress.org/block-editor/#develop-for-the-block-editor) for extensive tutorials, documentation, and API references.

### Contribute to Gutenberg

Gutenberg is an open-source project and welcomes all contributors from code to design, from documentation to triage. The project is built by many contributors and volunteers and we'd love your help building it.

See the [Contributors Handbook](https://developer.wordpress.org/block-editor/contributors/) for all the details on how you can contribute. See [CONTRIBUTING.md](https://github.com/WordPress/gutenberg/blob/HEAD/CONTRIBUTING.md) for the contributing guidelines.

As with all WordPress projects, we want to ensure a welcoming environment for everyone. With that in mind, all contributors are expected to follow our [Code of Conduct](https://github.com/WordPress/gutenberg/blob/HEAD/CODE_OF_CONDUCT.md).

## Get Involved

You can join us in the `#core-editor` channel in Slack, see the [WordPress Slack page](https://make.wordpress.org/chat/) for signup information; it is free to join.

**Weekly meetings** The Editor Team meets weekly on Wednesdays at 14:00 UTC in Slack. If you can not join the meeting, [agenda](https://make.wordpress.org/core/tag/core-editor-agenda/) and [notes](https://make.wordpress.org/core/tag/core-editor-summary/) are posted to the [Make WordPress Blog](https://make.wordpress.org/core/).

## License

WordPress is free software, and is released under the terms of the GNU General Public License version 2 or (at your option) any later version. See [LICENSE.md](LICENSE.md) for complete license.

[原文](https://github.com/WordPress/gutenberg/blob/master/README.md)

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
