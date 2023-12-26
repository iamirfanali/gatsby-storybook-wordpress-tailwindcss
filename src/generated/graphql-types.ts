export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GatsbyImageData: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  changeTime: Scalars['Date']['output'];
  children: Array<Node>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
};

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectorySortInput = {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
};

export type DuotoneGradient = {
  highlight: Scalars['String']['input'];
  opacity?: InputMaybe<Scalars['Int']['input']>;
  shadow: Scalars['String']['input'];
};

export enum FieldSelectorEnum {
  Select = 'SELECT'
}

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String']['output'];
  accessTime: Scalars['Date']['output'];
  atime: Scalars['Date']['output'];
  atimeMs: Scalars['Float']['output'];
  base: Scalars['String']['output'];
  birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']['output']>;
  blksize?: Maybe<Scalars['Int']['output']>;
  blocks?: Maybe<Scalars['Int']['output']>;
  changeTime: Scalars['Date']['output'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date']['output'];
  ctimeMs: Scalars['Float']['output'];
  dev: Scalars['Int']['output'];
  dir: Scalars['String']['output'];
  ext: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  gid: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ino: Scalars['Float']['output'];
  internal: Internal;
  mode: Scalars['Int']['output'];
  modifiedTime: Scalars['Date']['output'];
  mtime: Scalars['Date']['output'];
  mtimeMs: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  nlink: Scalars['Int']['output'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String']['output'];
  rdev: Scalars['Int']['output'];
  relativeDirectory: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  root: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sourceInstanceName: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldSelector = {
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mode?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<FileEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileSortInput = {
  absolutePath?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  children?: InputMaybe<NodeSortInput>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  ctime?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mode?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  prettySize?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
  ne?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64?: InputMaybe<Scalars['Boolean']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
};

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  base64?: Maybe<Scalars['String']['output']>;
  height: Scalars['Float']['output'];
  originalName?: Maybe<Scalars['String']['output']>;
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  srcSetWebp?: Maybe<Scalars['String']['output']>;
  srcWebp?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
  width: Scalars['Float']['output'];
};

export type ImageSharpFixedFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFixedSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  originalImg?: Maybe<Scalars['String']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  presentationHeight: Scalars['Int']['output'];
  presentationWidth: Scalars['Int']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  srcSetWebp?: Maybe<Scalars['String']['output']>;
  srcWebp?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
};

export type ImageSharpFluidFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  base64?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  base64?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ImageSharpOriginalFieldSelector = {
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpOriginalSortInput = {
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  tracedSVG?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ImageSharpResizeFieldSelector = {
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpResizeSortInput = {
  aspectRatio?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpSortInput = {
  children?: InputMaybe<NodeSortInput>;
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']['output']>;
  contentDigest: Scalars['String']['output'];
  contentFilePath?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ignoreType?: Maybe<Scalars['Boolean']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  glob?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  regex?: InputMaybe<Scalars['JSON']['input']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  itemCount: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount: Scalars['Int']['output'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  optCurve?: InputMaybe<Scalars['Boolean']['input']>;
  optTolerance?: InputMaybe<Scalars['Float']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
  turdSize?: InputMaybe<Scalars['Float']['input']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allWp: WpConnection;
  allWpCase: WpCaseConnection;
  allWpCategory: WpCategoryConnection;
  allWpComment: WpCommentConnection;
  allWpCommentAuthor: WpCommentAuthorConnection;
  allWpCommenter: WpCommenterConnection;
  allWpContentNode: WpContentNodeConnection;
  allWpContentType: WpContentTypeConnection;
  allWpHierarchicalContentNode: WpHierarchicalContentNodeConnection;
  allWpHierarchicalNode: WpHierarchicalNodeConnection;
  allWpHierarchicalTermNode: WpHierarchicalTermNodeConnection;
  allWpMediaItem: WpMediaItemConnection;
  allWpMenu: WpMenuConnection;
  allWpMenuItem: WpMenuItemConnection;
  allWpMenuItemLinkable: WpMenuItemLinkableConnection;
  allWpNodeWithAuthor: WpNodeWithAuthorConnection;
  allWpNodeWithComments: WpNodeWithCommentsConnection;
  allWpNodeWithContentEditor: WpNodeWithContentEditorConnection;
  allWpNodeWithExcerpt: WpNodeWithExcerptConnection;
  allWpNodeWithFeaturedImage: WpNodeWithFeaturedImageConnection;
  allWpNodeWithPageAttributes: WpNodeWithPageAttributesConnection;
  allWpNodeWithRevisions: WpNodeWithRevisionsConnection;
  allWpNodeWithTemplate: WpNodeWithTemplateConnection;
  allWpNodeWithTitle: WpNodeWithTitleConnection;
  allWpNodeWithTrackbacks: WpNodeWithTrackbacksConnection;
  allWpPage: WpPageConnection;
  allWpPost: WpPostConnection;
  allWpPostFormat: WpPostFormatConnection;
  allWpTag: WpTagConnection;
  allWpTaxonomy: WpTaxonomyConnection;
  allWpTermNode: WpTermNodeConnection;
  allWpUniformResourceIdentifiable: WpUniformResourceIdentifiableConnection;
  allWpUser: WpUserConnection;
  allWpUserRole: WpUserRoleConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  wp?: Maybe<Wp>;
  wpCase?: Maybe<WpCase>;
  wpCategory?: Maybe<WpCategory>;
  wpComment?: Maybe<WpComment>;
  wpCommentAuthor?: Maybe<WpCommentAuthor>;
  wpCommenter?: Maybe<WpCommenter>;
  wpContentNode?: Maybe<WpContentNode>;
  wpContentType?: Maybe<WpContentType>;
  wpHierarchicalContentNode?: Maybe<WpHierarchicalContentNode>;
  wpHierarchicalNode?: Maybe<WpHierarchicalNode>;
  wpHierarchicalTermNode?: Maybe<WpHierarchicalTermNode>;
  wpMediaItem?: Maybe<WpMediaItem>;
  wpMenu?: Maybe<WpMenu>;
  wpMenuItem?: Maybe<WpMenuItem>;
  wpMenuItemLinkable?: Maybe<WpMenuItemLinkable>;
  wpNodeWithAuthor?: Maybe<WpNodeWithAuthor>;
  wpNodeWithComments?: Maybe<WpNodeWithComments>;
  wpNodeWithContentEditor?: Maybe<WpNodeWithContentEditor>;
  wpNodeWithExcerpt?: Maybe<WpNodeWithExcerpt>;
  wpNodeWithFeaturedImage?: Maybe<WpNodeWithFeaturedImage>;
  wpNodeWithPageAttributes?: Maybe<WpNodeWithPageAttributes>;
  wpNodeWithRevisions?: Maybe<WpNodeWithRevisions>;
  wpNodeWithTemplate?: Maybe<WpNodeWithTemplate>;
  wpNodeWithTitle?: Maybe<WpNodeWithTitle>;
  wpNodeWithTrackbacks?: Maybe<WpNodeWithTrackbacks>;
  wpPage?: Maybe<WpPage>;
  wpPost?: Maybe<WpPost>;
  wpPostFormat?: Maybe<WpPostFormat>;
  wpTag?: Maybe<WpTag>;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  wpTermNode?: Maybe<WpTermNode>;
  wpUniformResourceIdentifiable?: Maybe<WpUniformResourceIdentifiable>;
  wpUser?: Maybe<WpUser>;
  wpUserRole?: Maybe<WpUserRole>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
};


export type QueryAllWpArgs = {
  filter?: InputMaybe<WpFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpSortInput>>>;
};


export type QueryAllWpCaseArgs = {
  filter?: InputMaybe<WpCaseFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpCaseSortInput>>>;
};


export type QueryAllWpCategoryArgs = {
  filter?: InputMaybe<WpCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpCategorySortInput>>>;
};


export type QueryAllWpCommentArgs = {
  filter?: InputMaybe<WpCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpCommentSortInput>>>;
};


export type QueryAllWpCommentAuthorArgs = {
  filter?: InputMaybe<WpCommentAuthorFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpCommentAuthorSortInput>>>;
};


export type QueryAllWpCommenterArgs = {
  filter?: InputMaybe<WpCommenterFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpCommenterSortInput>>>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: InputMaybe<WpContentNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpContentNodeSortInput>>>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: InputMaybe<WpContentTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpContentTypeSortInput>>>;
};


export type QueryAllWpHierarchicalContentNodeArgs = {
  filter?: InputMaybe<WpHierarchicalContentNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpHierarchicalContentNodeSortInput>>>;
};


export type QueryAllWpHierarchicalNodeArgs = {
  filter?: InputMaybe<WpHierarchicalNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpHierarchicalNodeSortInput>>>;
};


export type QueryAllWpHierarchicalTermNodeArgs = {
  filter?: InputMaybe<WpHierarchicalTermNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpHierarchicalTermNodeSortInput>>>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: InputMaybe<WpMediaItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpMediaItemSortInput>>>;
};


export type QueryAllWpMenuArgs = {
  filter?: InputMaybe<WpMenuFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpMenuSortInput>>>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: InputMaybe<WpMenuItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpMenuItemSortInput>>>;
};


export type QueryAllWpMenuItemLinkableArgs = {
  filter?: InputMaybe<WpMenuItemLinkableFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpMenuItemLinkableSortInput>>>;
};


export type QueryAllWpNodeWithAuthorArgs = {
  filter?: InputMaybe<WpNodeWithAuthorFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithAuthorSortInput>>>;
};


export type QueryAllWpNodeWithCommentsArgs = {
  filter?: InputMaybe<WpNodeWithCommentsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithCommentsSortInput>>>;
};


export type QueryAllWpNodeWithContentEditorArgs = {
  filter?: InputMaybe<WpNodeWithContentEditorFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithContentEditorSortInput>>>;
};


export type QueryAllWpNodeWithExcerptArgs = {
  filter?: InputMaybe<WpNodeWithExcerptFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithExcerptSortInput>>>;
};


export type QueryAllWpNodeWithFeaturedImageArgs = {
  filter?: InputMaybe<WpNodeWithFeaturedImageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithFeaturedImageSortInput>>>;
};


export type QueryAllWpNodeWithPageAttributesArgs = {
  filter?: InputMaybe<WpNodeWithPageAttributesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithPageAttributesSortInput>>>;
};


export type QueryAllWpNodeWithRevisionsArgs = {
  filter?: InputMaybe<WpNodeWithRevisionsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithRevisionsSortInput>>>;
};


export type QueryAllWpNodeWithTemplateArgs = {
  filter?: InputMaybe<WpNodeWithTemplateFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithTemplateSortInput>>>;
};


export type QueryAllWpNodeWithTitleArgs = {
  filter?: InputMaybe<WpNodeWithTitleFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithTitleSortInput>>>;
};


export type QueryAllWpNodeWithTrackbacksArgs = {
  filter?: InputMaybe<WpNodeWithTrackbacksFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpNodeWithTrackbacksSortInput>>>;
};


export type QueryAllWpPageArgs = {
  filter?: InputMaybe<WpPageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpPageSortInput>>>;
};


export type QueryAllWpPostArgs = {
  filter?: InputMaybe<WpPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpPostSortInput>>>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: InputMaybe<WpPostFormatFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpPostFormatSortInput>>>;
};


export type QueryAllWpTagArgs = {
  filter?: InputMaybe<WpTagFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpTagSortInput>>>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: InputMaybe<WpTaxonomyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpTaxonomySortInput>>>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: InputMaybe<WpTermNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpTermNodeSortInput>>>;
};


export type QueryAllWpUniformResourceIdentifiableArgs = {
  filter?: InputMaybe<WpUniformResourceIdentifiableFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpUniformResourceIdentifiableSortInput>>>;
};


export type QueryAllWpUserArgs = {
  filter?: InputMaybe<WpUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpUserSortInput>>>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: InputMaybe<WpUserRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WpUserRoleSortInput>>>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpArgs = {
  allSettings?: InputMaybe<WpSettingsFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  readingSettings?: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby?: InputMaybe<WpWpGatsbyFilterInput>;
  writingSettings?: InputMaybe<WpWritingSettingsFilterInput>;
};


export type QueryWpCaseArgs = {
  callToActions?: InputMaybe<WpCase_CalltoactionsFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<WpCase_IconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  orderNumber?: InputMaybe<WpCase_OrdernumberFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  subTitle?: InputMaybe<WpCase_SubtitleFilterInput>;
  summary?: InputMaybe<WpCase_SummaryFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpCategoryArgs = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionTypeFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  posts?: InputMaybe<WpCategoryToPostConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeFilterInput>;
};


export type QueryWpCommentArgs = {
  agent?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeTypeFilterInput>;
  authorIp?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  karma?: InputMaybe<IntQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  replies?: InputMaybe<WpCommentToCommentConnectionTypeFilterInput>;
  status?: InputMaybe<WpCommentStatusEnumQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeFilterInput>;
};


export type QueryWpCommentAuthorArgs = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpCommenterArgs = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpContentNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  canExport?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionTypeFilterInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionTypeFilterInput>;
  deleteWithUser?: InputMaybe<BooleanQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch?: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hasArchive?: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: InputMaybe<StringQueryOperatorInput>;
  menuPosition?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpHierarchicalContentNodeArgs = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};


export type QueryWpHierarchicalNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
};


export type QueryWpHierarchicalTermNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpMediaItemArgs = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionTypeFilterInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: InputMaybe<StringQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};


export type QueryWpMenuArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionTypeFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpMenuItemArgs = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeFilterInput>;
  cssClasses?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  linkRelationship?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpMenuItemLinkableArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpNodeWithAuthorArgs = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithCommentsArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithContentEditorArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithExcerptArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithFeaturedImageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithPageAttributesArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithRevisionsArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QueryWpNodeWithTemplateArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
};


export type QueryWpNodeWithTitleArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpNodeWithTrackbacksArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpPageArgs = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPageToCommentConnectionTypeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  pageSections?: InputMaybe<WpPage_PagesectionsFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};


export type QueryWpPostArgs = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  categories?: InputMaybe<WpPostToCategoryConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPostToCommentConnectionTypeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isSticky?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<WpPostToTagConnectionTypeFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionTypeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpPostFormatArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionTypeFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpTagArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionTypeFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpTagToPostConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionTypeFilterInput>;
  connectedTerms?: InputMaybe<WpTaxonomyToTermNodeConnectionTypeFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showCloud?: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
};


export type QueryWpTermNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpUniformResourceIdentifiableArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpUserArgs = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  capKey?: InputMaybe<StringQueryOperatorInput>;
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  comments?: InputMaybe<WpUserToCommentConnectionTypeFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nicename?: InputMaybe<StringQueryOperatorInput>;
  nickname?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<WpUserToPageConnectionTypeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpUserToPostConnectionTypeFilterInput>;
  registeredDate?: InputMaybe<StringQueryOperatorInput>;
  roles?: InputMaybe<WpUserToUserRoleConnectionTypeFilterInput>;
  shouldShowAdminToolbar?: InputMaybe<BooleanQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Int']['output']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  publicUrl: Scalars['String']['output'];
  resize?: Maybe<RemoteFileResize>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum RemoteFileCropFocus {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Edges = 'EDGES',
  Entropy = 'ENTROPY',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum RemoteFileFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Outside = 'OUTSIDE'
}

export enum RemoteFileFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum RemoteFileLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum RemoteFilePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type RemoteFileResize = {
  __typename?: 'RemoteFileResize';
  height?: Maybe<Scalars['Int']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type RemoteFileResizeFieldSelector = {
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type RemoteFileResizeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeSortInput = {
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  graphqlTypegen?: Maybe<Scalars['Boolean']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']['output']>;
  polyfill?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']['output']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']['output']>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  graphqlTypegen?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  port?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String']['output'];
  children: Array<Node>;
  functionRoute: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']['output']>;
  originalAbsoluteFilePath: Scalars['String']['output'];
  originalRelativeFilePath: Scalars['String']['output'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String']['output'];
  relativeCompiledFilePath: Scalars['String']['output'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionSortInput = {
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  functionRoute?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  matchPath?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginName?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SiteEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String']['output'];
  componentChunkName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  internalComponentName: Scalars['String']['output'];
  matchPath?: Maybe<Scalars['String']['output']>;
  pageContext?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  path: Scalars['String']['output'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  component?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  path?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
};

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageSortInput = {
  children?: InputMaybe<NodeSortInput>;
  component?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  path?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  name?: Maybe<Scalars['String']['output']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  packageJson?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']['output']>;
  pluginOptions?: Maybe<Scalars['JSON']['output']>;
  resolve?: Maybe<Scalars['String']['output']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  resolve?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
};

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginSortInput = {
  browserAPIs?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  resolve?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  graphqlTypegen?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  polyfill?: InputMaybe<SortOrderEnum>;
  port?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  trim?: InputMaybe<Scalars['Float']['input']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']['input']>;
};

/** Non-node WPGraphQL root fields. */
export type Wp = Node & {
  __typename?: 'Wp';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpSettings>;
  children: Array<Node>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<WpDiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<WpGeneralSettings>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  wpGatsby?: Maybe<WpWpGatsby>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WpWritingSettings>;
};

export type WpAcfFieldGroup = {
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpAvatar = {
  __typename?: 'WpAvatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']['output']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']['output']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']['output']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']['output']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']['output']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']['output']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']['output']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']['output']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']['output']>;
};

export type WpAvatarFieldSelector = {
  default?: InputMaybe<FieldSelectorEnum>;
  extraAttr?: InputMaybe<FieldSelectorEnum>;
  forceDefault?: InputMaybe<FieldSelectorEnum>;
  foundAvatar?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  rating?: InputMaybe<FieldSelectorEnum>;
  scheme?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type WpAvatarFilterInput = {
  default?: InputMaybe<StringQueryOperatorInput>;
  extraAttr?: InputMaybe<StringQueryOperatorInput>;
  forceDefault?: InputMaybe<BooleanQueryOperatorInput>;
  foundAvatar?: InputMaybe<BooleanQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  rating?: InputMaybe<StringQueryOperatorInput>;
  scheme?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type WpAvatarSortInput = {
  default?: InputMaybe<SortOrderEnum>;
  extraAttr?: InputMaybe<SortOrderEnum>;
  forceDefault?: InputMaybe<SortOrderEnum>;
  foundAvatar?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  rating?: InputMaybe<SortOrderEnum>;
  scheme?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

/** The Case type */
export type WpCase = Node & WpContentNode & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpNodeWithExcerpt & WpNodeWithFeaturedImage & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpCase';
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Call To Actions&quot; was set to Show in GraphQL. */
  callToActions?: Maybe<WpCase_Calltoactions>;
  children: Array<Node>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Icon&quot; was set to Show in GraphQL. */
  icon?: Maybe<WpCase_Icon>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Order Number&quot; was set to Show in GraphQL. */
  orderNumber?: Maybe<WpCase_Ordernumber>;
  parent?: Maybe<Node>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Sub Title&quot; was set to Show in GraphQL. */
  subTitle?: Maybe<WpCase_Subtitle>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Summary&quot; was set to Show in GraphQL. */
  summary?: Maybe<WpCase_Summary>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};


/** The Case type */
export type WpCaseDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The Case type */
export type WpCaseDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The Case type */
export type WpCaseModifiedArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The Case type */
export type WpCaseModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WpCaseConnection = {
  __typename?: 'WpCaseConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCaseEdge>;
  group: Array<WpCaseGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCase>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCaseConnectionDistinctArgs = {
  field: WpCaseFieldSelector;
};


export type WpCaseConnectionGroupArgs = {
  field: WpCaseFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCaseConnectionMaxArgs = {
  field: WpCaseFieldSelector;
};


export type WpCaseConnectionMinArgs = {
  field: WpCaseFieldSelector;
};


export type WpCaseConnectionSumArgs = {
  field: WpCaseFieldSelector;
};

export type WpCaseConnectionEdgeType = {
  /** The connected Case Node */
  node: WpCase;
};

export type WpCaseConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCaseConnectionType = {
  /** A list of connected Case Nodes */
  nodes: Array<WpCase>;
  /** Information about pagination in a connection. */
  pageInfo: WpCaseConnectionPageInfoType;
};

export type WpCaseEdge = {
  __typename?: 'WpCaseEdge';
  next?: Maybe<WpCase>;
  node: WpCase;
  previous?: Maybe<WpCase>;
};

export type WpCaseFieldSelector = {
  callToActions?: InputMaybe<WpCase_CalltoactionsFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  contentTypeName?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  desiredSlug?: InputMaybe<FieldSelectorEnum>;
  enclosure?: InputMaybe<FieldSelectorEnum>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  featuredImageDatabaseId?: InputMaybe<FieldSelectorEnum>;
  featuredImageId?: InputMaybe<FieldSelectorEnum>;
  guid?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<WpCase_IconFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  link?: InputMaybe<FieldSelectorEnum>;
  modified?: InputMaybe<FieldSelectorEnum>;
  modifiedGmt?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  orderNumber?: InputMaybe<WpCase_OrdernumberFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  subTitle?: InputMaybe<WpCase_SubtitleFieldSelector>;
  summary?: InputMaybe<WpCase_SummaryFieldSelector>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpCaseFilterInput = {
  callToActions?: InputMaybe<WpCase_CalltoactionsFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<WpCase_IconFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  orderNumber?: InputMaybe<WpCase_OrdernumberFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  subTitle?: InputMaybe<WpCase_SubtitleFilterInput>;
  summary?: InputMaybe<WpCase_SummaryFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCaseGroupConnection = {
  __typename?: 'WpCaseGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCaseEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpCaseGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCase>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCaseGroupConnectionDistinctArgs = {
  field: WpCaseFieldSelector;
};


export type WpCaseGroupConnectionGroupArgs = {
  field: WpCaseFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCaseGroupConnectionMaxArgs = {
  field: WpCaseFieldSelector;
};


export type WpCaseGroupConnectionMinArgs = {
  field: WpCaseFieldSelector;
};


export type WpCaseGroupConnectionSumArgs = {
  field: WpCaseFieldSelector;
};

export type WpCaseSortInput = {
  callToActions?: InputMaybe<WpCase_CalltoactionsSortInput>;
  children?: InputMaybe<NodeSortInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  contentTypeName?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  desiredSlug?: InputMaybe<SortOrderEnum>;
  enclosure?: InputMaybe<SortOrderEnum>;
  excerpt?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  featuredImageDatabaseId?: InputMaybe<SortOrderEnum>;
  featuredImageId?: InputMaybe<SortOrderEnum>;
  guid?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<WpCase_IconSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  link?: InputMaybe<SortOrderEnum>;
  modified?: InputMaybe<SortOrderEnum>;
  modifiedGmt?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  orderNumber?: InputMaybe<WpCase_OrdernumberSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  subTitle?: InputMaybe<WpCase_SubtitleSortInput>;
  summary?: InputMaybe<WpCase_SummarySortInput>;
  template?: InputMaybe<WpContentTemplateSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** Field Group */
export type WpCase_Calltoactions = WpAcfFieldGroup & {
  __typename?: 'WpCase_Calltoactions';
  cta?: Maybe<Array<Maybe<WpCase_Calltoactions_Cta>>>;
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
};

export type WpCase_CalltoactionsFieldSelector = {
  fieldGroupName?: InputMaybe<FieldSelectorEnum>;
};

export type WpCase_CalltoactionsFilterInput = {
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCase_CalltoactionsSortInput = {
  fieldGroupName?: InputMaybe<SortOrderEnum>;
};

export type WpCase_Calltoactions_Cta = WpCase_Calltoactions_Cta_AddCta;

export type WpCase_Calltoactions_Cta_AddCta = WpAcfFieldGroup & {
  __typename?: 'WpCase_Calltoactions_Cta_AddCta';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

/** Field Group */
export type WpCase_Icon = WpAcfFieldGroup & {
  __typename?: 'WpCase_Icon';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<WpMediaItem>;
};

export type WpCase_IconFieldSelector = {
  fieldGroupName?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<WpMediaItemFieldSelector>;
};

export type WpCase_IconFilterInput = {
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<WpMediaItemFilterInput>;
};

export type WpCase_IconSortInput = {
  fieldGroupName?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<WpMediaItemSortInput>;
};

/** Field Group */
export type WpCase_Ordernumber = WpAcfFieldGroup & {
  __typename?: 'WpCase_Ordernumber';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  /** Add the order number you want to force the content to be appeared on. */
  order?: Maybe<Scalars['Float']['output']>;
};

export type WpCase_OrdernumberFieldSelector = {
  fieldGroupName?: InputMaybe<FieldSelectorEnum>;
  order?: InputMaybe<FieldSelectorEnum>;
};

export type WpCase_OrdernumberFilterInput = {
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<FloatQueryOperatorInput>;
};

export type WpCase_OrdernumberSortInput = {
  fieldGroupName?: InputMaybe<SortOrderEnum>;
  order?: InputMaybe<SortOrderEnum>;
};

/** Field Group */
export type WpCase_Subtitle = WpAcfFieldGroup & {
  __typename?: 'WpCase_Subtitle';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type WpCase_SubtitleFieldSelector = {
  fieldGroupName?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
};

export type WpCase_SubtitleFilterInput = {
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCase_SubtitleSortInput = {
  fieldGroupName?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
};

/** Field Group */
export type WpCase_Summary = WpAcfFieldGroup & {
  __typename?: 'WpCase_Summary';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type WpCase_SummaryFieldSelector = {
  fieldGroupName?: InputMaybe<FieldSelectorEnum>;
  summary?: InputMaybe<FieldSelectorEnum>;
};

export type WpCase_SummaryFilterInput = {
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
  summary?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCase_SummarySortInput = {
  fieldGroupName?: InputMaybe<SortOrderEnum>;
  summary?: InputMaybe<SortOrderEnum>;
};

/** The category type */
export type WpCategory = Node & WpDatabaseIdentifier & WpHierarchicalNode & WpHierarchicalTermNode & WpMenuItemLinkable & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpCategory';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionType>;
  children: Array<Node>;
  /** Connection between the Category type and the ContentNode type */
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionType>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** Connection between the Category type and the post type */
  posts?: Maybe<WpCategoryToPostConnectionType>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Connection between the Category type and the Taxonomy type */
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeType>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
  /** Connection between the category type and its children categories. */
  wpChildren?: Maybe<WpCategoryToCategoryConnectionType>;
  /** Connection between the category type and its parent category. */
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeType>;
};

export type WpCategoryConnection = {
  __typename?: 'WpCategoryConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCategoryEdge>;
  group: Array<WpCategoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldSelector;
};


export type WpCategoryConnectionGroupArgs = {
  field: WpCategoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCategoryConnectionMaxArgs = {
  field: WpCategoryFieldSelector;
};


export type WpCategoryConnectionMinArgs = {
  field: WpCategoryFieldSelector;
};


export type WpCategoryConnectionSumArgs = {
  field: WpCategoryFieldSelector;
};

export type WpCategoryConnectionEdgeType = {
  /** The connected category Node */
  node: WpCategory;
};

export type WpCategoryConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCategoryConnectionType = {
  /** A list of connected category Nodes */
  nodes: Array<WpCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WpCategoryConnectionPageInfoType;
};

export type WpCategoryEdge = {
  __typename?: 'WpCategoryEdge';
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export type WpCategoryFieldSelector = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionTypeFieldSelector>;
  count?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  posts?: InputMaybe<WpCategoryToPostConnectionTypeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeFieldSelector>;
  taxonomyName?: InputMaybe<FieldSelectorEnum>;
  termGroupId?: InputMaybe<FieldSelectorEnum>;
  termTaxonomyId?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionTypeFieldSelector>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeFieldSelector>;
};

export type WpCategoryFilterInput = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionTypeFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  posts?: InputMaybe<WpCategoryToPostConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeFilterInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: InputMaybe<WpCategoryFilterInput>;
};

export type WpCategoryGroupConnection = {
  __typename?: 'WpCategoryGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCategoryEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpCategoryGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCategoryGroupConnectionDistinctArgs = {
  field: WpCategoryFieldSelector;
};


export type WpCategoryGroupConnectionGroupArgs = {
  field: WpCategoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCategoryGroupConnectionMaxArgs = {
  field: WpCategoryFieldSelector;
};


export type WpCategoryGroupConnectionMinArgs = {
  field: WpCategoryFieldSelector;
};


export type WpCategoryGroupConnectionSumArgs = {
  field: WpCategoryFieldSelector;
};

export type WpCategorySortInput = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionTypeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionTypeSortInput>;
  count?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  posts?: InputMaybe<WpCategoryToPostConnectionTypeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeTypeSortInput>;
  taxonomyName?: InputMaybe<SortOrderEnum>;
  termGroupId?: InputMaybe<SortOrderEnum>;
  termTaxonomyId?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionTypeSortInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type WpCategoryToAncestorsCategoryConnectionPageInfoType = WpCategoryConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpCategoryToAncestorsCategoryConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCategoryToAncestorsCategoryConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpCategoryToAncestorsCategoryConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCategoryToAncestorsCategoryConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the category type */
export type WpCategoryToAncestorsCategoryConnectionType = WpCategoryConnectionType & WpConnectionType & {
  __typename?: 'WpCategoryToAncestorsCategoryConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WpCategoryToAncestorsCategoryConnectionPageInfoType;
};

export type WpCategoryToAncestorsCategoryConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCategoryFieldSelector>;
  pageInfo?: InputMaybe<WpCategoryToAncestorsCategoryConnectionPageInfoTypeFieldSelector>;
};

export type WpCategoryToAncestorsCategoryConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
  pageInfo?: InputMaybe<WpCategoryToAncestorsCategoryConnectionPageInfoTypeFilterInput>;
};

export type WpCategoryToAncestorsCategoryConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCategorySortInput>;
  pageInfo?: InputMaybe<WpCategoryToAncestorsCategoryConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type WpCategoryToCategoryConnectionPageInfoType = WpCategoryConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpCategoryToCategoryConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCategoryToCategoryConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpCategoryToCategoryConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCategoryToCategoryConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the category type */
export type WpCategoryToCategoryConnectionType = WpCategoryConnectionType & WpConnectionType & {
  __typename?: 'WpCategoryToCategoryConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WpCategoryToCategoryConnectionPageInfoType;
};

export type WpCategoryToCategoryConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCategoryFieldSelector>;
  pageInfo?: InputMaybe<WpCategoryToCategoryConnectionPageInfoTypeFieldSelector>;
};

export type WpCategoryToCategoryConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
  pageInfo?: InputMaybe<WpCategoryToCategoryConnectionPageInfoTypeFilterInput>;
};

export type WpCategoryToCategoryConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCategorySortInput>;
  pageInfo?: InputMaybe<WpCategoryToCategoryConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type WpCategoryToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpCategoryToContentNodeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCategoryToContentNodeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpCategoryToContentNodeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCategoryToContentNodeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the ContentNode type */
export type WpCategoryToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  __typename?: 'WpCategoryToContentNodeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpCategoryToContentNodeConnectionPageInfoType;
};

export type WpCategoryToContentNodeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentNodeFieldSelector>;
  pageInfo?: InputMaybe<WpCategoryToContentNodeConnectionPageInfoTypeFieldSelector>;
};

export type WpCategoryToContentNodeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
  pageInfo?: InputMaybe<WpCategoryToContentNodeConnectionPageInfoTypeFilterInput>;
};

export type WpCategoryToContentNodeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentNodeSortInput>;
  pageInfo?: InputMaybe<WpCategoryToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Connection between the Category type and the category type */
export type WpCategoryToParentCategoryConnectionEdgeType = WpCategoryConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpCategoryToParentCategoryConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpCategory;
};

export type WpCategoryToParentCategoryConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpCategoryFieldSelector>;
};

export type WpCategoryToParentCategoryConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpCategoryFilterInput>;
};

export type WpCategoryToParentCategoryConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpCategorySortInput>;
};

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type WpCategoryToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  __typename?: 'WpCategoryToPostConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCategoryToPostConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpCategoryToPostConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCategoryToPostConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Category type and the post type */
export type WpCategoryToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  __typename?: 'WpCategoryToPostConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpPost>;
  /** Information about pagination in a connection. */
  pageInfo: WpCategoryToPostConnectionPageInfoType;
};

export type WpCategoryToPostConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpPostFieldSelector>;
  pageInfo?: InputMaybe<WpCategoryToPostConnectionPageInfoTypeFieldSelector>;
};

export type WpCategoryToPostConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
  pageInfo?: InputMaybe<WpCategoryToPostConnectionPageInfoTypeFilterInput>;
};

export type WpCategoryToPostConnectionTypeSortInput = {
  nodes?: InputMaybe<WpPostSortInput>;
  pageInfo?: InputMaybe<WpCategoryToPostConnectionPageInfoTypeSortInput>;
};

/** Connection between the Category type and the Taxonomy type */
export type WpCategoryToTaxonomyConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpTaxonomyConnectionEdgeType & {
  __typename?: 'WpCategoryToTaxonomyConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpTaxonomy;
};

export type WpCategoryToTaxonomyConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpTaxonomyFieldSelector>;
};

export type WpCategoryToTaxonomyConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpCategoryToTaxonomyConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpTaxonomySortInput>;
};

/** A Comment object */
export type WpComment = Node & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpComment';
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<Scalars['String']['output']>;
  /** The author of the comment */
  author?: Maybe<WpCommentToCommenterConnectionEdgeType>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<Scalars['String']['output']>;
  children: Array<Node>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeType>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<Scalars['String']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<Scalars['Date']['output']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<Scalars['Int']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<WpCommentToCommentConnectionType>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  status?: Maybe<WpCommentStatusEnum>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<Scalars['String']['output']>;
  /** Connection between the Comment type and the Comment type */
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeType>;
};


/** A Comment object */
export type WpCommentDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Comment object */
export type WpCommentDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** A Comment Author object */
export type WpCommentAuthor = Node & WpCommenter & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpCommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  children: Array<Node>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The email for the comment author */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']['output']>;
};

export type WpCommentAuthorConnection = {
  __typename?: 'WpCommentAuthorConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCommentAuthorEdge>;
  group: Array<WpCommentAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCommentAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCommentAuthorConnectionDistinctArgs = {
  field: WpCommentAuthorFieldSelector;
};


export type WpCommentAuthorConnectionGroupArgs = {
  field: WpCommentAuthorFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCommentAuthorConnectionMaxArgs = {
  field: WpCommentAuthorFieldSelector;
};


export type WpCommentAuthorConnectionMinArgs = {
  field: WpCommentAuthorFieldSelector;
};


export type WpCommentAuthorConnectionSumArgs = {
  field: WpCommentAuthorFieldSelector;
};

export type WpCommentAuthorEdge = {
  __typename?: 'WpCommentAuthorEdge';
  next?: Maybe<WpCommentAuthor>;
  node: WpCommentAuthor;
  previous?: Maybe<WpCommentAuthor>;
};

export type WpCommentAuthorFieldSelector = {
  avatar?: InputMaybe<WpAvatarFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  email?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type WpCommentAuthorFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCommentAuthorGroupConnection = {
  __typename?: 'WpCommentAuthorGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCommentAuthorEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpCommentAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCommentAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCommentAuthorGroupConnectionDistinctArgs = {
  field: WpCommentAuthorFieldSelector;
};


export type WpCommentAuthorGroupConnectionGroupArgs = {
  field: WpCommentAuthorFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCommentAuthorGroupConnectionMaxArgs = {
  field: WpCommentAuthorFieldSelector;
};


export type WpCommentAuthorGroupConnectionMinArgs = {
  field: WpCommentAuthorFieldSelector;
};


export type WpCommentAuthorGroupConnectionSumArgs = {
  field: WpCommentAuthorFieldSelector;
};

export type WpCommentAuthorSortInput = {
  avatar?: InputMaybe<WpAvatarSortInput>;
  children?: InputMaybe<NodeSortInput>;
  databaseId?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  url?: InputMaybe<SortOrderEnum>;
};

export type WpCommentConnection = {
  __typename?: 'WpCommentConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCommentEdge>;
  group: Array<WpCommentGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldSelector;
};


export type WpCommentConnectionGroupArgs = {
  field: WpCommentFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCommentConnectionMaxArgs = {
  field: WpCommentFieldSelector;
};


export type WpCommentConnectionMinArgs = {
  field: WpCommentFieldSelector;
};


export type WpCommentConnectionSumArgs = {
  field: WpCommentFieldSelector;
};

export type WpCommentConnectionEdgeType = {
  /** The connected Comment Node */
  node: WpComment;
};

export type WpCommentConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCommentConnectionType = {
  /** A list of connected Comment Nodes */
  nodes: Array<WpComment>;
  /** Information about pagination in a connection. */
  pageInfo: WpCommentConnectionPageInfoType;
};

export type WpCommentEdge = {
  __typename?: 'WpCommentEdge';
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export type WpCommentFieldSelector = {
  agent?: InputMaybe<FieldSelectorEnum>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeTypeFieldSelector>;
  authorIp?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeFieldSelector>;
  content?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  karma?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  replies?: InputMaybe<WpCommentToCommentConnectionTypeFieldSelector>;
  status?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeFieldSelector>;
};

export type WpCommentFilterInput = {
  agent?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeTypeFilterInput>;
  authorIp?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  karma?: InputMaybe<IntQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  replies?: InputMaybe<WpCommentToCommentConnectionTypeFilterInput>;
  status?: InputMaybe<WpCommentStatusEnumQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeFilterInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: InputMaybe<WpCommentFilterInput>;
};

export type WpCommentGroupConnection = {
  __typename?: 'WpCommentGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCommentEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpCommentGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCommentGroupConnectionDistinctArgs = {
  field: WpCommentFieldSelector;
};


export type WpCommentGroupConnectionGroupArgs = {
  field: WpCommentFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCommentGroupConnectionMaxArgs = {
  field: WpCommentFieldSelector;
};


export type WpCommentGroupConnectionMinArgs = {
  field: WpCommentFieldSelector;
};


export type WpCommentGroupConnectionSumArgs = {
  field: WpCommentFieldSelector;
};

export type WpCommentSortInput = {
  agent?: InputMaybe<SortOrderEnum>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeTypeSortInput>;
  authorIp?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeTypeSortInput>;
  content?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  karma?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  replies?: InputMaybe<WpCommentToCommentConnectionTypeSortInput>;
  status?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeTypeSortInput>;
};

/** The status of the comment object. */
export enum WpCommentStatusEnum {
  Approve = 'APPROVE',
  Hold = 'HOLD',
  Spam = 'SPAM',
  Trash = 'TRASH'
}

export type WpCommentStatusEnumQueryOperatorInput = {
  eq?: InputMaybe<WpCommentStatusEnum>;
  in?: InputMaybe<Array<InputMaybe<WpCommentStatusEnum>>>;
  ne?: InputMaybe<WpCommentStatusEnum>;
  nin?: InputMaybe<Array<InputMaybe<WpCommentStatusEnum>>>;
};

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type WpCommentToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpCommentToCommentConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpCommentToCommentConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpCommentToCommentConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCommentToCommentConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  __typename?: 'WpCommentToCommentConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpComment>;
  /** Information about pagination in a connection. */
  pageInfo: WpCommentToCommentConnectionPageInfoType;
};

export type WpCommentToCommentConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCommentFieldSelector>;
  pageInfo?: InputMaybe<WpCommentToCommentConnectionPageInfoTypeFieldSelector>;
};

export type WpCommentToCommentConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
  pageInfo?: InputMaybe<WpCommentToCommentConnectionPageInfoTypeFilterInput>;
};

export type WpCommentToCommentConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCommentSortInput>;
  pageInfo?: InputMaybe<WpCommentToCommentConnectionPageInfoTypeSortInput>;
};

/** Connection between the Comment type and the Commenter type */
export type WpCommentToCommenterConnectionEdgeType = WpCommenterConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpCommentToCommenterConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpCommenter;
};

export type WpCommentToCommenterConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpCommenterFieldSelector>;
};

export type WpCommentToCommenterConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpCommenterFilterInput>;
};

export type WpCommentToCommenterConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpCommenterSortInput>;
};

/** Connection between the Comment type and the ContentNode type */
export type WpCommentToContentNodeConnectionEdgeType = WpContentNodeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpCommentToContentNodeConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpContentNode;
};

export type WpCommentToContentNodeConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpContentNodeFieldSelector>;
};

export type WpCommentToContentNodeConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpCommentToContentNodeConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpContentNodeSortInput>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToParentCommentConnectionEdgeType = WpCommentConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpCommentToParentCommentConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpComment;
};

export type WpCommentToParentCommentConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpCommentFieldSelector>;
};

export type WpCommentToParentCommentConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpCommentFilterInput>;
};

export type WpCommentToParentCommentConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpCommentSortInput>;
};

export type WpCommenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  children: Array<Node>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']['output']>;
};

export type WpCommenterConnection = {
  __typename?: 'WpCommenterConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCommenterEdge>;
  group: Array<WpCommenterGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCommenter>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCommenterConnectionDistinctArgs = {
  field: WpCommenterFieldSelector;
};


export type WpCommenterConnectionGroupArgs = {
  field: WpCommenterFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCommenterConnectionMaxArgs = {
  field: WpCommenterFieldSelector;
};


export type WpCommenterConnectionMinArgs = {
  field: WpCommenterFieldSelector;
};


export type WpCommenterConnectionSumArgs = {
  field: WpCommenterFieldSelector;
};

export type WpCommenterConnectionEdgeType = {
  /** The connected Commenter Node */
  node: WpCommenter;
};

export type WpCommenterEdge = {
  __typename?: 'WpCommenterEdge';
  next?: Maybe<WpCommenter>;
  node: WpCommenter;
  previous?: Maybe<WpCommenter>;
};

export type WpCommenterFieldSelector = {
  avatar?: InputMaybe<WpAvatarFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  email?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type WpCommenterFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCommenterGroupConnection = {
  __typename?: 'WpCommenterGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpCommenterEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpCommenterGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpCommenter>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpCommenterGroupConnectionDistinctArgs = {
  field: WpCommenterFieldSelector;
};


export type WpCommenterGroupConnectionGroupArgs = {
  field: WpCommenterFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpCommenterGroupConnectionMaxArgs = {
  field: WpCommenterFieldSelector;
};


export type WpCommenterGroupConnectionMinArgs = {
  field: WpCommenterFieldSelector;
};


export type WpCommenterGroupConnectionSumArgs = {
  field: WpCommenterFieldSelector;
};

export type WpCommenterSortInput = {
  avatar?: InputMaybe<WpAvatarSortInput>;
  children?: InputMaybe<NodeSortInput>;
  databaseId?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  url?: InputMaybe<SortOrderEnum>;
};

export type WpConnection = {
  __typename?: 'WpConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpEdge>;
  group: Array<WpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpConnectionDistinctArgs = {
  field: WpFieldSelector;
};


export type WpConnectionGroupArgs = {
  field: WpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpConnectionMaxArgs = {
  field: WpFieldSelector;
};


export type WpConnectionMinArgs = {
  field: WpFieldSelector;
};


export type WpConnectionSumArgs = {
  field: WpFieldSelector;
};

export type WpConnectionType = {
  /** A list of connected nodes */
  nodes: Array<WpNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpPageInfoType;
};

export type WpContentNode = {
  children: Array<Node>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};


export type WpContentNodeDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type WpContentNodeDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type WpContentNodeModifiedArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type WpContentNodeModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WpContentNodeConnection = {
  __typename?: 'WpContentNodeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpContentNodeEdge>;
  group: Array<WpContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldSelector;
};


export type WpContentNodeConnectionGroupArgs = {
  field: WpContentNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpContentNodeConnectionMaxArgs = {
  field: WpContentNodeFieldSelector;
};


export type WpContentNodeConnectionMinArgs = {
  field: WpContentNodeFieldSelector;
};


export type WpContentNodeConnectionSumArgs = {
  field: WpContentNodeFieldSelector;
};

export type WpContentNodeConnectionEdgeType = {
  /** The connected ContentNode Node */
  node: WpContentNode;
};

export type WpContentNodeConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpContentNodeConnectionType = {
  /** A list of connected ContentNode Nodes */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpContentNodeConnectionPageInfoType;
};

export type WpContentNodeEdge = {
  __typename?: 'WpContentNodeEdge';
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export type WpContentNodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  contentTypeName?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  desiredSlug?: InputMaybe<FieldSelectorEnum>;
  enclosure?: InputMaybe<FieldSelectorEnum>;
  guid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  link?: InputMaybe<FieldSelectorEnum>;
  modified?: InputMaybe<FieldSelectorEnum>;
  modifiedGmt?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpContentNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpContentNodeGroupConnection = {
  __typename?: 'WpContentNodeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpContentNodeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpContentNodeGroupConnectionDistinctArgs = {
  field: WpContentNodeFieldSelector;
};


export type WpContentNodeGroupConnectionGroupArgs = {
  field: WpContentNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpContentNodeGroupConnectionMaxArgs = {
  field: WpContentNodeFieldSelector;
};


export type WpContentNodeGroupConnectionMinArgs = {
  field: WpContentNodeFieldSelector;
};


export type WpContentNodeGroupConnectionSumArgs = {
  field: WpContentNodeFieldSelector;
};

export type WpContentNodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  contentTypeName?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  desiredSlug?: InputMaybe<SortOrderEnum>;
  enclosure?: InputMaybe<SortOrderEnum>;
  guid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  link?: InputMaybe<SortOrderEnum>;
  modified?: InputMaybe<SortOrderEnum>;
  modifiedGmt?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  template?: InputMaybe<WpContentTemplateSortInput>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** Connection between the ContentNode type and the ContentType type */
export type WpContentNodeToContentTypeConnectionEdgeType = WpContentTypeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpContentNodeToContentTypeConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpContentType;
};

export type WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpContentTypeFieldSelector>;
};

export type WpContentNodeToContentTypeConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpContentTypeFilterInput>;
};

export type WpContentNodeToContentTypeConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpContentTypeSortInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLastConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpUserConnectionEdgeType & {
  __typename?: 'WpContentNodeToEditLastConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpUser;
};

export type WpContentNodeToEditLastConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpUserFieldSelector>;
};

export type WpContentNodeToEditLastConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpUserFilterInput>;
};

export type WpContentNodeToEditLastConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpUserSortInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLockConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpUserConnectionEdgeType & {
  __typename?: 'WpContentNodeToEditLockConnectionEdgeType';
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: WpUser;
};

export type WpContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>;
};

export type WpContentTemplateFieldSelector = {
  templateName?: InputMaybe<FieldSelectorEnum>;
};

export type WpContentTemplateFilterInput = {
  templateName?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentTemplateSortInput = {
  templateName?: InputMaybe<SortOrderEnum>;
};

/** An Post Type object */
export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpContentType';
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']['output']>;
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']['output']>;
  children: Array<Node>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionType>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionType>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']['output']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']['output']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']['output']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']['output']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']['output']>;
  /** Details about the content type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']['output']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']['output']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']['output']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']['output']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']['output']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']['output']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']['output']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']['output']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpContentTypeConnection = {
  __typename?: 'WpContentTypeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpContentTypeEdge>;
  group: Array<WpContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldSelector;
};


export type WpContentTypeConnectionGroupArgs = {
  field: WpContentTypeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpContentTypeConnectionMaxArgs = {
  field: WpContentTypeFieldSelector;
};


export type WpContentTypeConnectionMinArgs = {
  field: WpContentTypeFieldSelector;
};


export type WpContentTypeConnectionSumArgs = {
  field: WpContentTypeFieldSelector;
};

export type WpContentTypeConnectionEdgeType = {
  /** The connected ContentType Node */
  node: WpContentType;
};

export type WpContentTypeConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpContentTypeConnectionType = {
  /** A list of connected ContentType Nodes */
  nodes: Array<WpContentType>;
  /** Information about pagination in a connection. */
  pageInfo: WpContentTypeConnectionPageInfoType;
};

export type WpContentTypeEdge = {
  __typename?: 'WpContentTypeEdge';
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export type WpContentTypeFieldSelector = {
  archivePath?: InputMaybe<FieldSelectorEnum>;
  canExport?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionTypeFieldSelector>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionTypeFieldSelector>;
  deleteWithUser?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  excludeFromSearch?: InputMaybe<FieldSelectorEnum>;
  graphqlPluralName?: InputMaybe<FieldSelectorEnum>;
  graphqlSingleName?: InputMaybe<FieldSelectorEnum>;
  hasArchive?: InputMaybe<FieldSelectorEnum>;
  hierarchical?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isFrontPage?: InputMaybe<FieldSelectorEnum>;
  isPostsPage?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  label?: InputMaybe<FieldSelectorEnum>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFieldSelector>;
  menuIcon?: InputMaybe<FieldSelectorEnum>;
  menuPosition?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  public?: InputMaybe<FieldSelectorEnum>;
  publiclyQueryable?: InputMaybe<FieldSelectorEnum>;
  restBase?: InputMaybe<FieldSelectorEnum>;
  restControllerClass?: InputMaybe<FieldSelectorEnum>;
  showInAdminBar?: InputMaybe<FieldSelectorEnum>;
  showInGraphql?: InputMaybe<FieldSelectorEnum>;
  showInMenu?: InputMaybe<FieldSelectorEnum>;
  showInNavMenus?: InputMaybe<FieldSelectorEnum>;
  showInRest?: InputMaybe<FieldSelectorEnum>;
  showUi?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpContentTypeFilterInput = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  canExport?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionTypeFilterInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionTypeFilterInput>;
  deleteWithUser?: InputMaybe<BooleanQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch?: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hasArchive?: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: InputMaybe<StringQueryOperatorInput>;
  menuPosition?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: InputMaybe<WpContentTypeFilterInput>;
};

export type WpContentTypeGroupConnection = {
  __typename?: 'WpContentTypeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpContentTypeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpContentTypeGroupConnectionDistinctArgs = {
  field: WpContentTypeFieldSelector;
};


export type WpContentTypeGroupConnectionGroupArgs = {
  field: WpContentTypeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpContentTypeGroupConnectionMaxArgs = {
  field: WpContentTypeFieldSelector;
};


export type WpContentTypeGroupConnectionMinArgs = {
  field: WpContentTypeFieldSelector;
};


export type WpContentTypeGroupConnectionSumArgs = {
  field: WpContentTypeFieldSelector;
};

export type WpContentTypeSortInput = {
  archivePath?: InputMaybe<SortOrderEnum>;
  canExport?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionTypeSortInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionTypeSortInput>;
  deleteWithUser?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  excludeFromSearch?: InputMaybe<SortOrderEnum>;
  graphqlPluralName?: InputMaybe<SortOrderEnum>;
  graphqlSingleName?: InputMaybe<SortOrderEnum>;
  hasArchive?: InputMaybe<SortOrderEnum>;
  hierarchical?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isFrontPage?: InputMaybe<SortOrderEnum>;
  isPostsPage?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  label?: InputMaybe<SortOrderEnum>;
  labels?: InputMaybe<WpPostTypeLabelDetailsSortInput>;
  menuIcon?: InputMaybe<SortOrderEnum>;
  menuPosition?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  public?: InputMaybe<SortOrderEnum>;
  publiclyQueryable?: InputMaybe<SortOrderEnum>;
  restBase?: InputMaybe<SortOrderEnum>;
  restControllerClass?: InputMaybe<SortOrderEnum>;
  showInAdminBar?: InputMaybe<SortOrderEnum>;
  showInGraphql?: InputMaybe<SortOrderEnum>;
  showInMenu?: InputMaybe<SortOrderEnum>;
  showInNavMenus?: InputMaybe<SortOrderEnum>;
  showInRest?: InputMaybe<SortOrderEnum>;
  showUi?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type WpContentTypeToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpContentTypeToContentNodeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpContentTypeToContentNodeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpContentTypeToContentNodeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentTypeToContentNodeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the ContentType type and the ContentNode type */
export type WpContentTypeToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  __typename?: 'WpContentTypeToContentNodeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpContentTypeToContentNodeConnectionPageInfoType;
};

export type WpContentTypeToContentNodeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentNodeFieldSelector>;
  pageInfo?: InputMaybe<WpContentTypeToContentNodeConnectionPageInfoTypeFieldSelector>;
};

export type WpContentTypeToContentNodeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
  pageInfo?: InputMaybe<WpContentTypeToContentNodeConnectionPageInfoTypeFilterInput>;
};

export type WpContentTypeToContentNodeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentNodeSortInput>;
  pageInfo?: InputMaybe<WpContentTypeToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type WpContentTypeToTaxonomyConnectionPageInfoType = WpPageInfoType & WpTaxonomyConnectionPageInfoType & {
  __typename?: 'WpContentTypeToTaxonomyConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpContentTypeToTaxonomyConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpContentTypeToTaxonomyConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentTypeToTaxonomyConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type WpContentTypeToTaxonomyConnectionType = WpConnectionType & WpTaxonomyConnectionType & {
  __typename?: 'WpContentTypeToTaxonomyConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpTaxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: WpContentTypeToTaxonomyConnectionPageInfoType;
};

export type WpContentTypeToTaxonomyConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpTaxonomyFieldSelector>;
  pageInfo?: InputMaybe<WpContentTypeToTaxonomyConnectionPageInfoTypeFieldSelector>;
};

export type WpContentTypeToTaxonomyConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpTaxonomyFilterListInput>;
  pageInfo?: InputMaybe<WpContentTypeToTaxonomyConnectionPageInfoTypeFilterInput>;
};

export type WpContentTypeToTaxonomyConnectionTypeSortInput = {
  nodes?: InputMaybe<WpTaxonomySortInput>;
  pageInfo?: InputMaybe<WpContentTypeToTaxonomyConnectionPageInfoTypeSortInput>;
};

export type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
};

/** The template assigned to the node */
export type WpDefaultTemplate = WpContentTemplate & {
  __typename?: 'WpDefaultTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>;
};

/** The discussion setting type */
export type WpDiscussionSettings = {
  __typename?: 'WpDiscussionSettings';
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']['output']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']['output']>;
};

export type WpDiscussionSettingsFieldSelector = {
  defaultCommentStatus?: InputMaybe<FieldSelectorEnum>;
  defaultPingStatus?: InputMaybe<FieldSelectorEnum>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: InputMaybe<StringQueryOperatorInput>;
  defaultPingStatus?: InputMaybe<StringQueryOperatorInput>;
};

export type WpDiscussionSettingsSortInput = {
  defaultCommentStatus?: InputMaybe<SortOrderEnum>;
  defaultPingStatus?: InputMaybe<SortOrderEnum>;
};

export type WpEdge = {
  __typename?: 'WpEdge';
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

export type WpEdgeType = {
  /** The connected node */
  node: WpNode;
};

export type WpFieldSelector = {
  allSettings?: InputMaybe<WpSettingsFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFieldSelector>;
  generalSettings?: InputMaybe<WpGeneralSettingsFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  readingSettings?: InputMaybe<WpReadingSettingsFieldSelector>;
  wpGatsby?: InputMaybe<WpWpGatsbyFieldSelector>;
  writingSettings?: InputMaybe<WpWritingSettingsFieldSelector>;
};

export type WpFilterInput = {
  allSettings?: InputMaybe<WpSettingsFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  readingSettings?: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby?: InputMaybe<WpWpGatsbyFilterInput>;
  writingSettings?: InputMaybe<WpWritingSettingsFilterInput>;
};

/** The general setting type */
export type WpGeneralSettings = {
  __typename?: 'WpGeneralSettings';
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']['output']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']['output']>;
  /** This address is used for admin purposes, like new user notification. */
  email?: Maybe<Scalars['String']['output']>;
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']['output']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']['output']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']['output']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Site title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']['output']>;
};

export type WpGeneralSettingsFieldSelector = {
  dateFormat?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  email?: InputMaybe<FieldSelectorEnum>;
  language?: InputMaybe<FieldSelectorEnum>;
  startOfWeek?: InputMaybe<FieldSelectorEnum>;
  timeFormat?: InputMaybe<FieldSelectorEnum>;
  timezone?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  startOfWeek?: InputMaybe<IntQueryOperatorInput>;
  timeFormat?: InputMaybe<StringQueryOperatorInput>;
  timezone?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpGeneralSettingsSortInput = {
  dateFormat?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  language?: InputMaybe<SortOrderEnum>;
  startOfWeek?: InputMaybe<SortOrderEnum>;
  timeFormat?: InputMaybe<SortOrderEnum>;
  timezone?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type WpGroupConnection = {
  __typename?: 'WpGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpGroupConnectionDistinctArgs = {
  field: WpFieldSelector;
};


export type WpGroupConnectionGroupArgs = {
  field: WpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpGroupConnectionMaxArgs = {
  field: WpFieldSelector;
};


export type WpGroupConnectionMinArgs = {
  field: WpFieldSelector;
};


export type WpGroupConnectionSumArgs = {
  field: WpFieldSelector;
};

export type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionType>;
  children: Array<Node>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionType>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType>;
};


export type WpHierarchicalContentNodeDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type WpHierarchicalContentNodeDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type WpHierarchicalContentNodeModifiedArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type WpHierarchicalContentNodeModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WpHierarchicalContentNodeConnection = {
  __typename?: 'WpHierarchicalContentNodeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpHierarchicalContentNodeEdge>;
  group: Array<WpHierarchicalContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpHierarchicalContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpHierarchicalContentNodeConnectionDistinctArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


export type WpHierarchicalContentNodeConnectionGroupArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpHierarchicalContentNodeConnectionMaxArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


export type WpHierarchicalContentNodeConnectionMinArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


export type WpHierarchicalContentNodeConnectionSumArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};

export type WpHierarchicalContentNodeEdge = {
  __typename?: 'WpHierarchicalContentNodeEdge';
  next?: Maybe<WpHierarchicalContentNode>;
  node: WpHierarchicalContentNode;
  previous?: Maybe<WpHierarchicalContentNode>;
};

export type WpHierarchicalContentNodeFieldSelector = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  contentTypeName?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  desiredSlug?: InputMaybe<FieldSelectorEnum>;
  enclosure?: InputMaybe<FieldSelectorEnum>;
  guid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  link?: InputMaybe<FieldSelectorEnum>;
  modified?: InputMaybe<FieldSelectorEnum>;
  modifiedGmt?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
  uri?: InputMaybe<FieldSelectorEnum>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector>;
};

export type WpHierarchicalContentNodeFilterInput = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};

export type WpHierarchicalContentNodeGroupConnection = {
  __typename?: 'WpHierarchicalContentNodeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpHierarchicalContentNodeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpHierarchicalContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpHierarchicalContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpHierarchicalContentNodeGroupConnectionDistinctArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


export type WpHierarchicalContentNodeGroupConnectionGroupArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpHierarchicalContentNodeGroupConnectionMaxArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


export type WpHierarchicalContentNodeGroupConnectionMinArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};


export type WpHierarchicalContentNodeGroupConnectionSumArgs = {
  field: WpHierarchicalContentNodeFieldSelector;
};

export type WpHierarchicalContentNodeSortInput = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  contentTypeName?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  desiredSlug?: InputMaybe<SortOrderEnum>;
  enclosure?: InputMaybe<SortOrderEnum>;
  guid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  link?: InputMaybe<SortOrderEnum>;
  modified?: InputMaybe<SortOrderEnum>;
  modifiedGmt?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  template?: InputMaybe<WpContentTemplateSortInput>;
  uri?: InputMaybe<SortOrderEnum>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  __typename?: 'WpHierarchicalContentNodeToContentNodeAncestorsConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoType;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentNodeFieldSelector>;
  pageInfo?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFieldSelector>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
  pageInfo?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentNodeSortInput>;
  pageInfo?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeChildrenConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  __typename?: 'WpHierarchicalContentNodeToContentNodeChildrenConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoType;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentNodeFieldSelector>;
  pageInfo?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFieldSelector>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
  pageInfo?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeFilterInput>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentNodeSortInput>;
  pageInfo?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionPageInfoTypeSortInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType = WpContentNodeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpContentNode;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpContentNodeFieldSelector>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpContentNodeSortInput>;
};

export type WpHierarchicalNode = {
  children: Array<Node>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>;
};

export type WpHierarchicalNodeConnection = {
  __typename?: 'WpHierarchicalNodeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpHierarchicalNodeEdge>;
  group: Array<WpHierarchicalNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpHierarchicalNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpHierarchicalNodeConnectionDistinctArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


export type WpHierarchicalNodeConnectionGroupArgs = {
  field: WpHierarchicalNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpHierarchicalNodeConnectionMaxArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


export type WpHierarchicalNodeConnectionMinArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


export type WpHierarchicalNodeConnectionSumArgs = {
  field: WpHierarchicalNodeFieldSelector;
};

export type WpHierarchicalNodeEdge = {
  __typename?: 'WpHierarchicalNodeEdge';
  next?: Maybe<WpHierarchicalNode>;
  node: WpHierarchicalNode;
  previous?: Maybe<WpHierarchicalNode>;
};

export type WpHierarchicalNodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
};

export type WpHierarchicalNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
};

export type WpHierarchicalNodeGroupConnection = {
  __typename?: 'WpHierarchicalNodeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpHierarchicalNodeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpHierarchicalNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpHierarchicalNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpHierarchicalNodeGroupConnectionDistinctArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


export type WpHierarchicalNodeGroupConnectionGroupArgs = {
  field: WpHierarchicalNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpHierarchicalNodeGroupConnectionMaxArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


export type WpHierarchicalNodeGroupConnectionMinArgs = {
  field: WpHierarchicalNodeFieldSelector;
};


export type WpHierarchicalNodeGroupConnectionSumArgs = {
  field: WpHierarchicalNodeFieldSelector;
};

export type WpHierarchicalNodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  databaseId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
};

export type WpHierarchicalTermNode = {
  children: Array<Node>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpHierarchicalTermNodeConnection = {
  __typename?: 'WpHierarchicalTermNodeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpHierarchicalTermNodeEdge>;
  group: Array<WpHierarchicalTermNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpHierarchicalTermNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpHierarchicalTermNodeConnectionDistinctArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


export type WpHierarchicalTermNodeConnectionGroupArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpHierarchicalTermNodeConnectionMaxArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


export type WpHierarchicalTermNodeConnectionMinArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


export type WpHierarchicalTermNodeConnectionSumArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};

export type WpHierarchicalTermNodeEdge = {
  __typename?: 'WpHierarchicalTermNodeEdge';
  next?: Maybe<WpHierarchicalTermNode>;
  node: WpHierarchicalTermNode;
  previous?: Maybe<WpHierarchicalTermNode>;
};

export type WpHierarchicalTermNodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  count?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  taxonomyName?: InputMaybe<FieldSelectorEnum>;
  termGroupId?: InputMaybe<FieldSelectorEnum>;
  termTaxonomyId?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpHierarchicalTermNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpHierarchicalTermNodeGroupConnection = {
  __typename?: 'WpHierarchicalTermNodeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpHierarchicalTermNodeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpHierarchicalTermNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpHierarchicalTermNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpHierarchicalTermNodeGroupConnectionDistinctArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


export type WpHierarchicalTermNodeGroupConnectionGroupArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpHierarchicalTermNodeGroupConnectionMaxArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


export type WpHierarchicalTermNodeGroupConnectionMinArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};


export type WpHierarchicalTermNodeGroupConnectionSumArgs = {
  field: WpHierarchicalTermNodeFieldSelector;
};

export type WpHierarchicalTermNodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  count?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  taxonomyName?: InputMaybe<SortOrderEnum>;
  termGroupId?: InputMaybe<SortOrderEnum>;
  termTaxonomyId?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** File details for a Media Item */
export type WpMediaDetails = {
  __typename?: 'WpMediaDetails';
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']['output']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']['output']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']['output']>;
};

export type WpMediaDetailsFieldSelector = {
  file?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  meta?: InputMaybe<WpMediaItemMetaFieldSelector>;
  sizes?: InputMaybe<WpMediaSizeFieldSelector>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type WpMediaDetailsFilterInput = {
  file?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  meta?: InputMaybe<WpMediaItemMetaFilterInput>;
  sizes?: InputMaybe<WpMediaSizeFilterListInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type WpMediaDetailsSortInput = {
  file?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  meta?: InputMaybe<WpMediaItemMetaSortInput>;
  sizes?: InputMaybe<WpMediaSizeSortInput>;
  width?: InputMaybe<SortOrderEnum>;
};

/** The mediaItem type */
export type WpMediaItem = Node & RemoteFile & WpContentNode & WpDatabaseIdentifier & WpHierarchicalContentNode & WpHierarchicalNode & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpMediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']['output']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionType>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']['output']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']['output']>;
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>;
  /** Connection between the MediaItem type and the Comment type */
  comments?: Maybe<WpMediaItemToCommentConnectionType>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']['output']>;
  filename: Scalars['String']['output'];
  filesize?: Maybe<Scalars['Int']['output']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  localFile?: Maybe<File>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']['output']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']['output']>;
  mimeType: Scalars['String']['output'];
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>;
  publicUrl: Scalars['String']['output'];
  resize?: Maybe<RemoteFileResize>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']['output']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionType>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType>;
};


/** The mediaItem type */
export type WpMediaItemDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The mediaItem type */
export type WpMediaItemDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The mediaItem type */
export type WpMediaItemGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The mediaItem type */
export type WpMediaItemResizeArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type WpMediaItemConnection = {
  __typename?: 'WpMediaItemConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMediaItemEdge>;
  group: Array<WpMediaItemGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldSelector;
};


export type WpMediaItemConnectionGroupArgs = {
  field: WpMediaItemFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMediaItemConnectionMaxArgs = {
  field: WpMediaItemFieldSelector;
};


export type WpMediaItemConnectionMinArgs = {
  field: WpMediaItemFieldSelector;
};


export type WpMediaItemConnectionSumArgs = {
  field: WpMediaItemFieldSelector;
};

export type WpMediaItemConnectionEdgeType = {
  /** The connected mediaItem Node */
  node: WpMediaItem;
};

export type WpMediaItemConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpMediaItemConnectionType = {
  /** A list of connected mediaItem Nodes */
  nodes: Array<WpMediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: WpMediaItemConnectionPageInfoType;
};

export type WpMediaItemEdge = {
  __typename?: 'WpMediaItemEdge';
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export type WpMediaItemFieldSelector = {
  altText?: InputMaybe<FieldSelectorEnum>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  authorDatabaseId?: InputMaybe<FieldSelectorEnum>;
  authorId?: InputMaybe<FieldSelectorEnum>;
  caption?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  commentCount?: InputMaybe<FieldSelectorEnum>;
  commentStatus?: InputMaybe<FieldSelectorEnum>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionTypeFieldSelector>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  contentTypeName?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  desiredSlug?: InputMaybe<FieldSelectorEnum>;
  enclosure?: InputMaybe<FieldSelectorEnum>;
  fileSize?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  filesize?: InputMaybe<FieldSelectorEnum>;
  gatsbyImage?: InputMaybe<FieldSelectorEnum>;
  guid?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  link?: InputMaybe<FieldSelectorEnum>;
  localFile?: InputMaybe<FileFieldSelector>;
  mediaDetails?: InputMaybe<WpMediaDetailsFieldSelector>;
  mediaItemUrl?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  modified?: InputMaybe<FieldSelectorEnum>;
  modifiedGmt?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  publicUrl?: InputMaybe<FieldSelectorEnum>;
  resize?: InputMaybe<RemoteFileResizeFieldSelector>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  sourceUrl?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector>;
};

export type WpMediaItemFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionTypeFilterInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: InputMaybe<StringQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};

export type WpMediaItemGroupConnection = {
  __typename?: 'WpMediaItemGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMediaItemEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpMediaItemGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMediaItemGroupConnectionDistinctArgs = {
  field: WpMediaItemFieldSelector;
};


export type WpMediaItemGroupConnectionGroupArgs = {
  field: WpMediaItemFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMediaItemGroupConnectionMaxArgs = {
  field: WpMediaItemFieldSelector;
};


export type WpMediaItemGroupConnectionMinArgs = {
  field: WpMediaItemFieldSelector;
};


export type WpMediaItemGroupConnectionSumArgs = {
  field: WpMediaItemFieldSelector;
};

/** Meta connected to a MediaItem */
export type WpMediaItemMeta = {
  __typename?: 'WpMediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']['output']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']['output']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']['output']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']['output']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']['output']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']['output']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']['output']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']['output']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']['output']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']['output']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']['output']>;
};

export type WpMediaItemMetaFieldSelector = {
  aperture?: InputMaybe<FieldSelectorEnum>;
  camera?: InputMaybe<FieldSelectorEnum>;
  caption?: InputMaybe<FieldSelectorEnum>;
  copyright?: InputMaybe<FieldSelectorEnum>;
  createdTimestamp?: InputMaybe<FieldSelectorEnum>;
  credit?: InputMaybe<FieldSelectorEnum>;
  focalLength?: InputMaybe<FieldSelectorEnum>;
  iso?: InputMaybe<FieldSelectorEnum>;
  keywords?: InputMaybe<FieldSelectorEnum>;
  orientation?: InputMaybe<FieldSelectorEnum>;
  shutterSpeed?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: InputMaybe<FloatQueryOperatorInput>;
  camera?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  createdTimestamp?: InputMaybe<IntQueryOperatorInput>;
  credit?: InputMaybe<StringQueryOperatorInput>;
  focalLength?: InputMaybe<FloatQueryOperatorInput>;
  iso?: InputMaybe<IntQueryOperatorInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  orientation?: InputMaybe<StringQueryOperatorInput>;
  shutterSpeed?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMediaItemMetaSortInput = {
  aperture?: InputMaybe<SortOrderEnum>;
  camera?: InputMaybe<SortOrderEnum>;
  caption?: InputMaybe<SortOrderEnum>;
  copyright?: InputMaybe<SortOrderEnum>;
  createdTimestamp?: InputMaybe<SortOrderEnum>;
  credit?: InputMaybe<SortOrderEnum>;
  focalLength?: InputMaybe<SortOrderEnum>;
  iso?: InputMaybe<SortOrderEnum>;
  keywords?: InputMaybe<SortOrderEnum>;
  orientation?: InputMaybe<SortOrderEnum>;
  shutterSpeed?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type WpMediaItemSortInput = {
  altText?: InputMaybe<SortOrderEnum>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  authorDatabaseId?: InputMaybe<SortOrderEnum>;
  authorId?: InputMaybe<SortOrderEnum>;
  caption?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  commentCount?: InputMaybe<SortOrderEnum>;
  commentStatus?: InputMaybe<SortOrderEnum>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionTypeSortInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  contentTypeName?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  desiredSlug?: InputMaybe<SortOrderEnum>;
  enclosure?: InputMaybe<SortOrderEnum>;
  fileSize?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  filesize?: InputMaybe<SortOrderEnum>;
  gatsbyImage?: InputMaybe<SortOrderEnum>;
  guid?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  link?: InputMaybe<SortOrderEnum>;
  localFile?: InputMaybe<FileSortInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsSortInput>;
  mediaItemUrl?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  modified?: InputMaybe<SortOrderEnum>;
  modifiedGmt?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  publicUrl?: InputMaybe<SortOrderEnum>;
  resize?: InputMaybe<RemoteFileResizeSortInput>;
  sizes?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  sourceUrl?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  template?: InputMaybe<WpContentTemplateSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export type WpMediaItemToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpMediaItemToCommentConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpMediaItemToCommentConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpMediaItemToCommentConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMediaItemToCommentConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the MediaItem type and the Comment type */
export type WpMediaItemToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  __typename?: 'WpMediaItemToCommentConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpComment>;
  /** Information about pagination in a connection. */
  pageInfo: WpMediaItemToCommentConnectionPageInfoType;
};

export type WpMediaItemToCommentConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCommentFieldSelector>;
  pageInfo?: InputMaybe<WpMediaItemToCommentConnectionPageInfoTypeFieldSelector>;
};

export type WpMediaItemToCommentConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
  pageInfo?: InputMaybe<WpMediaItemToCommentConnectionPageInfoTypeFilterInput>;
};

export type WpMediaItemToCommentConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCommentSortInput>;
  pageInfo?: InputMaybe<WpMediaItemToCommentConnectionPageInfoTypeSortInput>;
};

/** Details of an available size for a media item */
export type WpMediaSize = {
  __typename?: 'WpMediaSize';
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']['output']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']['output']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']['output']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']['output']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']['output']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']['output']>;
};

export type WpMediaSizeFieldSelector = {
  file?: InputMaybe<FieldSelectorEnum>;
  fileSize?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  sourceUrl?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type WpMediaSizeFilterInput = {
  file?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: InputMaybe<WpMediaSizeFilterInput>;
};

export type WpMediaSizeSortInput = {
  file?: InputMaybe<SortOrderEnum>;
  fileSize?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  sourceUrl?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type WpMenu = Node & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpMenu';
  children: Array<Node>;
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpMenuToMenuItemConnectionType>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']['output']>;
};

export type WpMenuConnection = {
  __typename?: 'WpMenuConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMenuEdge>;
  group: Array<WpMenuGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldSelector;
};


export type WpMenuConnectionGroupArgs = {
  field: WpMenuFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMenuConnectionMaxArgs = {
  field: WpMenuFieldSelector;
};


export type WpMenuConnectionMinArgs = {
  field: WpMenuFieldSelector;
};


export type WpMenuConnectionSumArgs = {
  field: WpMenuFieldSelector;
};

export type WpMenuConnectionEdgeType = {
  /** The connected Menu Node */
  node: WpMenu;
};

export type WpMenuConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpMenuConnectionType = {
  /** A list of connected Menu Nodes */
  nodes: Array<WpMenu>;
  /** Information about pagination in a connection. */
  pageInfo: WpMenuConnectionPageInfoType;
};

export type WpMenuEdge = {
  __typename?: 'WpMenuEdge';
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export type WpMenuFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  count?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  locations?: InputMaybe<FieldSelectorEnum>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionTypeFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
};

export type WpMenuFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionTypeFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuGroupConnection = {
  __typename?: 'WpMenuGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMenuEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpMenuGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMenuGroupConnectionDistinctArgs = {
  field: WpMenuFieldSelector;
};


export type WpMenuGroupConnectionGroupArgs = {
  field: WpMenuFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMenuGroupConnectionMaxArgs = {
  field: WpMenuFieldSelector;
};


export type WpMenuGroupConnectionMinArgs = {
  field: WpMenuFieldSelector;
};


export type WpMenuGroupConnectionSumArgs = {
  field: WpMenuFieldSelector;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpMenuItem = Node & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpMenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnectionType>;
  children: Array<Node>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeType>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']['output']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']['output']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeType>;
  nodeType?: Maybe<Scalars['String']['output']>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Node>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path?: Maybe<Scalars['String']['output']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']['output']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']['output']>;
  /** The uri of the resource the menu item links to */
  uri?: Maybe<Scalars['String']['output']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']['output']>;
};

export type WpMenuItemConnection = {
  __typename?: 'WpMenuItemConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMenuItemEdge>;
  group: Array<WpMenuItemGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldSelector;
};


export type WpMenuItemConnectionGroupArgs = {
  field: WpMenuItemFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMenuItemConnectionMaxArgs = {
  field: WpMenuItemFieldSelector;
};


export type WpMenuItemConnectionMinArgs = {
  field: WpMenuItemFieldSelector;
};


export type WpMenuItemConnectionSumArgs = {
  field: WpMenuItemFieldSelector;
};

export type WpMenuItemConnectionEdgeType = {
  /** The connected MenuItem Node */
  node: WpMenuItem;
};

export type WpMenuItemConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpMenuItemConnectionType = {
  /** A list of connected MenuItem Nodes */
  nodes: Array<WpMenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: WpMenuItemConnectionPageInfoType;
};

export type WpMenuItemEdge = {
  __typename?: 'WpMenuItemEdge';
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export type WpMenuItemFieldSelector = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionTypeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeFieldSelector>;
  cssClasses?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  label?: InputMaybe<FieldSelectorEnum>;
  linkRelationship?: InputMaybe<FieldSelectorEnum>;
  locations?: InputMaybe<FieldSelectorEnum>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  order?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  path?: InputMaybe<FieldSelectorEnum>;
  target?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type WpMenuItemFilterInput = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeFilterInput>;
  cssClasses?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  linkRelationship?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: InputMaybe<WpMenuItemFilterInput>;
};

export type WpMenuItemGroupConnection = {
  __typename?: 'WpMenuItemGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMenuItemEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpMenuItemGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMenuItemGroupConnectionDistinctArgs = {
  field: WpMenuItemFieldSelector;
};


export type WpMenuItemGroupConnectionGroupArgs = {
  field: WpMenuItemFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMenuItemGroupConnectionMaxArgs = {
  field: WpMenuItemFieldSelector;
};


export type WpMenuItemGroupConnectionMinArgs = {
  field: WpMenuItemFieldSelector;
};


export type WpMenuItemGroupConnectionSumArgs = {
  field: WpMenuItemFieldSelector;
};

export type WpMenuItemLinkable = {
  children: Array<Node>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpMenuItemLinkableConnection = {
  __typename?: 'WpMenuItemLinkableConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMenuItemLinkableEdge>;
  group: Array<WpMenuItemLinkableGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMenuItemLinkable>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMenuItemLinkableConnectionDistinctArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


export type WpMenuItemLinkableConnectionGroupArgs = {
  field: WpMenuItemLinkableFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMenuItemLinkableConnectionMaxArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


export type WpMenuItemLinkableConnectionMinArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


export type WpMenuItemLinkableConnectionSumArgs = {
  field: WpMenuItemLinkableFieldSelector;
};

export type WpMenuItemLinkableConnectionEdgeType = {
  /** The connected MenuItemLinkable Node */
  node: WpMenuItemLinkable;
};

export type WpMenuItemLinkableEdge = {
  __typename?: 'WpMenuItemLinkableEdge';
  next?: Maybe<WpMenuItemLinkable>;
  node: WpMenuItemLinkable;
  previous?: Maybe<WpMenuItemLinkable>;
};

export type WpMenuItemLinkableFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpMenuItemLinkableFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuItemLinkableGroupConnection = {
  __typename?: 'WpMenuItemLinkableGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpMenuItemLinkableEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpMenuItemLinkableGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpMenuItemLinkable>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpMenuItemLinkableGroupConnectionDistinctArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


export type WpMenuItemLinkableGroupConnectionGroupArgs = {
  field: WpMenuItemLinkableFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpMenuItemLinkableGroupConnectionMaxArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


export type WpMenuItemLinkableGroupConnectionMinArgs = {
  field: WpMenuItemLinkableFieldSelector;
};


export type WpMenuItemLinkableGroupConnectionSumArgs = {
  field: WpMenuItemLinkableFieldSelector;
};

export type WpMenuItemLinkableSortInput = {
  children?: InputMaybe<NodeSortInput>;
  databaseId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  uri?: InputMaybe<SortOrderEnum>;
};

export type WpMenuItemSortInput = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionTypeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeTypeSortInput>;
  cssClasses?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  label?: InputMaybe<SortOrderEnum>;
  linkRelationship?: InputMaybe<SortOrderEnum>;
  locations?: InputMaybe<SortOrderEnum>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeTypeSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  order?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  path?: InputMaybe<SortOrderEnum>;
  target?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

/** Connection between the MenuItem type and the Menu type */
export type WpMenuItemToMenuConnectionEdgeType = WpEdgeType & WpMenuConnectionEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpMenuItemToMenuConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpMenu;
};

export type WpMenuItemToMenuConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpMenuFieldSelector>;
};

export type WpMenuItemToMenuConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpMenuFilterInput>;
};

export type WpMenuItemToMenuConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpMenuSortInput>;
};

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type WpMenuItemToMenuItemConnectionPageInfoType = WpMenuItemConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpMenuItemToMenuItemConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpMenuItemToMenuItemConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpMenuItemToMenuItemConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuItemToMenuItemConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type WpMenuItemToMenuItemConnectionType = WpConnectionType & WpMenuItemConnectionType & {
  __typename?: 'WpMenuItemToMenuItemConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpMenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: WpMenuItemToMenuItemConnectionPageInfoType;
};

export type WpMenuItemToMenuItemConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpMenuItemFieldSelector>;
  pageInfo?: InputMaybe<WpMenuItemToMenuItemConnectionPageInfoTypeFieldSelector>;
};

export type WpMenuItemToMenuItemConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpMenuItemFilterListInput>;
  pageInfo?: InputMaybe<WpMenuItemToMenuItemConnectionPageInfoTypeFilterInput>;
};

export type WpMenuItemToMenuItemConnectionTypeSortInput = {
  nodes?: InputMaybe<WpMenuItemSortInput>;
  pageInfo?: InputMaybe<WpMenuItemToMenuItemConnectionPageInfoTypeSortInput>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type WpMenuItemToMenuItemLinkableConnectionEdgeType = WpEdgeType & WpMenuItemLinkableConnectionEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpMenuItemToMenuItemLinkableConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpMenuItemLinkable;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpMenuItemLinkableFieldSelector>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpMenuItemLinkableFilterInput>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpMenuItemLinkableSortInput>;
};

/** Registered menu locations */
export enum WpMenuLocationEnum {
  GatsbyFooterMenu = 'GATSBY_FOOTER_MENU',
  GatsbyHeaderMenu = 'GATSBY_HEADER_MENU'
}

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: InputMaybe<WpMenuLocationEnum>;
  in?: InputMaybe<Array<InputMaybe<WpMenuLocationEnum>>>;
  ne?: InputMaybe<WpMenuLocationEnum>;
  nin?: InputMaybe<Array<InputMaybe<WpMenuLocationEnum>>>;
};

export type WpMenuSortInput = {
  children?: InputMaybe<NodeSortInput>;
  count?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  locations?: InputMaybe<SortOrderEnum>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionTypeSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type WpMenuToMenuItemConnectionPageInfoType = WpMenuItemConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpMenuToMenuItemConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpMenuToMenuItemConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpMenuToMenuItemConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuToMenuItemConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Menu type and the MenuItem type */
export type WpMenuToMenuItemConnectionType = WpConnectionType & WpMenuItemConnectionType & {
  __typename?: 'WpMenuToMenuItemConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpMenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: WpMenuToMenuItemConnectionPageInfoType;
};

export type WpMenuToMenuItemConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpMenuItemFieldSelector>;
  pageInfo?: InputMaybe<WpMenuToMenuItemConnectionPageInfoTypeFieldSelector>;
};

export type WpMenuToMenuItemConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpMenuItemFilterListInput>;
  pageInfo?: InputMaybe<WpMenuToMenuItemConnectionPageInfoTypeFilterInput>;
};

export type WpMenuToMenuItemConnectionTypeSortInput = {
  nodes?: InputMaybe<WpMenuItemSortInput>;
  pageInfo?: InputMaybe<WpMenuToMenuItemConnectionPageInfoTypeSortInput>;
};

export type WpNode = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};

export type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']['output']>;
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithAuthorConnection = {
  __typename?: 'WpNodeWithAuthorConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithAuthorEdge>;
  group: Array<WpNodeWithAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithAuthorConnectionDistinctArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


export type WpNodeWithAuthorConnectionGroupArgs = {
  field: WpNodeWithAuthorFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithAuthorConnectionMaxArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


export type WpNodeWithAuthorConnectionMinArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


export type WpNodeWithAuthorConnectionSumArgs = {
  field: WpNodeWithAuthorFieldSelector;
};

export type WpNodeWithAuthorEdge = {
  __typename?: 'WpNodeWithAuthorEdge';
  next?: Maybe<WpNodeWithAuthor>;
  node: WpNodeWithAuthor;
  previous?: Maybe<WpNodeWithAuthor>;
};

export type WpNodeWithAuthorFieldSelector = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  authorDatabaseId?: InputMaybe<FieldSelectorEnum>;
  authorId?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithAuthorFilterInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithAuthorGroupConnection = {
  __typename?: 'WpNodeWithAuthorGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithAuthorEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithAuthorGroupConnectionDistinctArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


export type WpNodeWithAuthorGroupConnectionGroupArgs = {
  field: WpNodeWithAuthorFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithAuthorGroupConnectionMaxArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


export type WpNodeWithAuthorGroupConnectionMinArgs = {
  field: WpNodeWithAuthorFieldSelector;
};


export type WpNodeWithAuthorGroupConnectionSumArgs = {
  field: WpNodeWithAuthorFieldSelector;
};

export type WpNodeWithAuthorSortInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  authorDatabaseId?: InputMaybe<SortOrderEnum>;
  authorId?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type WpNodeWithAuthorToUserConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpUserConnectionEdgeType & {
  __typename?: 'WpNodeWithAuthorToUserConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpUser;
};

export type WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpUserFieldSelector>;
};

export type WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpUserFilterInput>;
};

export type WpNodeWithAuthorToUserConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpUserSortInput>;
};

export type WpNodeWithComments = {
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithCommentsConnection = {
  __typename?: 'WpNodeWithCommentsConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithCommentsEdge>;
  group: Array<WpNodeWithCommentsGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithComments>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithCommentsConnectionDistinctArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


export type WpNodeWithCommentsConnectionGroupArgs = {
  field: WpNodeWithCommentsFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithCommentsConnectionMaxArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


export type WpNodeWithCommentsConnectionMinArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


export type WpNodeWithCommentsConnectionSumArgs = {
  field: WpNodeWithCommentsFieldSelector;
};

export type WpNodeWithCommentsEdge = {
  __typename?: 'WpNodeWithCommentsEdge';
  next?: Maybe<WpNodeWithComments>;
  node: WpNodeWithComments;
  previous?: Maybe<WpNodeWithComments>;
};

export type WpNodeWithCommentsFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  commentCount?: InputMaybe<FieldSelectorEnum>;
  commentStatus?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithCommentsFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithCommentsGroupConnection = {
  __typename?: 'WpNodeWithCommentsGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithCommentsEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithCommentsGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithComments>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithCommentsGroupConnectionDistinctArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


export type WpNodeWithCommentsGroupConnectionGroupArgs = {
  field: WpNodeWithCommentsFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithCommentsGroupConnectionMaxArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


export type WpNodeWithCommentsGroupConnectionMinArgs = {
  field: WpNodeWithCommentsFieldSelector;
};


export type WpNodeWithCommentsGroupConnectionSumArgs = {
  field: WpNodeWithCommentsFieldSelector;
};

export type WpNodeWithCommentsSortInput = {
  children?: InputMaybe<NodeSortInput>;
  commentCount?: InputMaybe<SortOrderEnum>;
  commentStatus?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

export type WpNodeWithContentEditor = {
  children: Array<Node>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithContentEditorConnection = {
  __typename?: 'WpNodeWithContentEditorConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithContentEditorEdge>;
  group: Array<WpNodeWithContentEditorGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithContentEditor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithContentEditorConnectionDistinctArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


export type WpNodeWithContentEditorConnectionGroupArgs = {
  field: WpNodeWithContentEditorFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithContentEditorConnectionMaxArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


export type WpNodeWithContentEditorConnectionMinArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


export type WpNodeWithContentEditorConnectionSumArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};

export type WpNodeWithContentEditorEdge = {
  __typename?: 'WpNodeWithContentEditorEdge';
  next?: Maybe<WpNodeWithContentEditor>;
  node: WpNodeWithContentEditor;
  previous?: Maybe<WpNodeWithContentEditor>;
};

export type WpNodeWithContentEditorFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  content?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithContentEditorFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithContentEditorGroupConnection = {
  __typename?: 'WpNodeWithContentEditorGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithContentEditorEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithContentEditorGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithContentEditor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithContentEditorGroupConnectionDistinctArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


export type WpNodeWithContentEditorGroupConnectionGroupArgs = {
  field: WpNodeWithContentEditorFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithContentEditorGroupConnectionMaxArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


export type WpNodeWithContentEditorGroupConnectionMinArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};


export type WpNodeWithContentEditorGroupConnectionSumArgs = {
  field: WpNodeWithContentEditorFieldSelector;
};

export type WpNodeWithContentEditorSortInput = {
  children?: InputMaybe<NodeSortInput>;
  content?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

export type WpNodeWithExcerpt = {
  children: Array<Node>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithExcerptConnection = {
  __typename?: 'WpNodeWithExcerptConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithExcerptEdge>;
  group: Array<WpNodeWithExcerptGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithExcerpt>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithExcerptConnectionDistinctArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


export type WpNodeWithExcerptConnectionGroupArgs = {
  field: WpNodeWithExcerptFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithExcerptConnectionMaxArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


export type WpNodeWithExcerptConnectionMinArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


export type WpNodeWithExcerptConnectionSumArgs = {
  field: WpNodeWithExcerptFieldSelector;
};

export type WpNodeWithExcerptEdge = {
  __typename?: 'WpNodeWithExcerptEdge';
  next?: Maybe<WpNodeWithExcerpt>;
  node: WpNodeWithExcerpt;
  previous?: Maybe<WpNodeWithExcerpt>;
};

export type WpNodeWithExcerptFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithExcerptFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithExcerptGroupConnection = {
  __typename?: 'WpNodeWithExcerptGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithExcerptEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithExcerptGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithExcerpt>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithExcerptGroupConnectionDistinctArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


export type WpNodeWithExcerptGroupConnectionGroupArgs = {
  field: WpNodeWithExcerptFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithExcerptGroupConnectionMaxArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


export type WpNodeWithExcerptGroupConnectionMinArgs = {
  field: WpNodeWithExcerptFieldSelector;
};


export type WpNodeWithExcerptGroupConnectionSumArgs = {
  field: WpNodeWithExcerptFieldSelector;
};

export type WpNodeWithExcerptSortInput = {
  children?: InputMaybe<NodeSortInput>;
  excerpt?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

export type WpNodeWithFeaturedImage = {
  children: Array<Node>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithFeaturedImageConnection = {
  __typename?: 'WpNodeWithFeaturedImageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithFeaturedImageEdge>;
  group: Array<WpNodeWithFeaturedImageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithFeaturedImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithFeaturedImageConnectionDistinctArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


export type WpNodeWithFeaturedImageConnectionGroupArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithFeaturedImageConnectionMaxArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


export type WpNodeWithFeaturedImageConnectionMinArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


export type WpNodeWithFeaturedImageConnectionSumArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};

export type WpNodeWithFeaturedImageEdge = {
  __typename?: 'WpNodeWithFeaturedImageEdge';
  next?: Maybe<WpNodeWithFeaturedImage>;
  node: WpNodeWithFeaturedImage;
  previous?: Maybe<WpNodeWithFeaturedImage>;
};

export type WpNodeWithFeaturedImageFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  featuredImageDatabaseId?: InputMaybe<FieldSelectorEnum>;
  featuredImageId?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithFeaturedImageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithFeaturedImageGroupConnection = {
  __typename?: 'WpNodeWithFeaturedImageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithFeaturedImageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithFeaturedImageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithFeaturedImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithFeaturedImageGroupConnectionDistinctArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


export type WpNodeWithFeaturedImageGroupConnectionGroupArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithFeaturedImageGroupConnectionMaxArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


export type WpNodeWithFeaturedImageGroupConnectionMinArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};


export type WpNodeWithFeaturedImageGroupConnectionSumArgs = {
  field: WpNodeWithFeaturedImageFieldSelector;
};

export type WpNodeWithFeaturedImageSortInput = {
  children?: InputMaybe<NodeSortInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  featuredImageDatabaseId?: InputMaybe<SortOrderEnum>;
  featuredImageId?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeType = WpEdgeType & WpMediaItemConnectionEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpNodeWithFeaturedImageToMediaItemConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpMediaItem;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpMediaItemFieldSelector>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpMediaItemFilterInput>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpMediaItemSortInput>;
};

export type WpNodeWithPageAttributes = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithPageAttributesConnection = {
  __typename?: 'WpNodeWithPageAttributesConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithPageAttributesEdge>;
  group: Array<WpNodeWithPageAttributesGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithPageAttributes>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithPageAttributesConnectionDistinctArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


export type WpNodeWithPageAttributesConnectionGroupArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithPageAttributesConnectionMaxArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


export type WpNodeWithPageAttributesConnectionMinArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


export type WpNodeWithPageAttributesConnectionSumArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};

export type WpNodeWithPageAttributesEdge = {
  __typename?: 'WpNodeWithPageAttributesEdge';
  next?: Maybe<WpNodeWithPageAttributes>;
  node: WpNodeWithPageAttributes;
  previous?: Maybe<WpNodeWithPageAttributes>;
};

export type WpNodeWithPageAttributesFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  menuOrder?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithPageAttributesFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithPageAttributesGroupConnection = {
  __typename?: 'WpNodeWithPageAttributesGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithPageAttributesEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithPageAttributesGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithPageAttributes>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithPageAttributesGroupConnectionDistinctArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


export type WpNodeWithPageAttributesGroupConnectionGroupArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithPageAttributesGroupConnectionMaxArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


export type WpNodeWithPageAttributesGroupConnectionMinArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};


export type WpNodeWithPageAttributesGroupConnectionSumArgs = {
  field: WpNodeWithPageAttributesFieldSelector;
};

export type WpNodeWithPageAttributesSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  menuOrder?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

export type WpNodeWithRevisions = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpNodeWithRevisionsConnection = {
  __typename?: 'WpNodeWithRevisionsConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithRevisionsEdge>;
  group: Array<WpNodeWithRevisionsGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithRevisions>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithRevisionsConnectionDistinctArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


export type WpNodeWithRevisionsConnectionGroupArgs = {
  field: WpNodeWithRevisionsFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithRevisionsConnectionMaxArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


export type WpNodeWithRevisionsConnectionMinArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


export type WpNodeWithRevisionsConnectionSumArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};

export type WpNodeWithRevisionsEdge = {
  __typename?: 'WpNodeWithRevisionsEdge';
  next?: Maybe<WpNodeWithRevisions>;
  node: WpNodeWithRevisions;
  previous?: Maybe<WpNodeWithRevisions>;
};

export type WpNodeWithRevisionsFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isRevision?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpNodeWithRevisionsFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpNodeWithRevisionsGroupConnection = {
  __typename?: 'WpNodeWithRevisionsGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithRevisionsEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithRevisionsGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithRevisions>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithRevisionsGroupConnectionDistinctArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


export type WpNodeWithRevisionsGroupConnectionGroupArgs = {
  field: WpNodeWithRevisionsFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithRevisionsGroupConnectionMaxArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


export type WpNodeWithRevisionsGroupConnectionMinArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};


export type WpNodeWithRevisionsGroupConnectionSumArgs = {
  field: WpNodeWithRevisionsFieldSelector;
};

export type WpNodeWithRevisionsSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isRevision?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type WpNodeWithRevisionsToContentNodeConnectionEdgeType = WpContentNodeConnectionEdgeType & WpEdgeType & WpOneToOneConnectionType & {
  __typename?: 'WpNodeWithRevisionsToContentNodeConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpContentNode;
};

export type WpNodeWithTemplate = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
};

export type WpNodeWithTemplateConnection = {
  __typename?: 'WpNodeWithTemplateConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithTemplateEdge>;
  group: Array<WpNodeWithTemplateGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithTemplate>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithTemplateConnectionDistinctArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


export type WpNodeWithTemplateConnectionGroupArgs = {
  field: WpNodeWithTemplateFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithTemplateConnectionMaxArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


export type WpNodeWithTemplateConnectionMinArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


export type WpNodeWithTemplateConnectionSumArgs = {
  field: WpNodeWithTemplateFieldSelector;
};

export type WpNodeWithTemplateEdge = {
  __typename?: 'WpNodeWithTemplateEdge';
  next?: Maybe<WpNodeWithTemplate>;
  node: WpNodeWithTemplate;
  previous?: Maybe<WpNodeWithTemplate>;
};

export type WpNodeWithTemplateFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
};

export type WpNodeWithTemplateFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
};

export type WpNodeWithTemplateGroupConnection = {
  __typename?: 'WpNodeWithTemplateGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithTemplateEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithTemplateGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithTemplate>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithTemplateGroupConnectionDistinctArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


export type WpNodeWithTemplateGroupConnectionGroupArgs = {
  field: WpNodeWithTemplateFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithTemplateGroupConnectionMaxArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


export type WpNodeWithTemplateGroupConnectionMinArgs = {
  field: WpNodeWithTemplateFieldSelector;
};


export type WpNodeWithTemplateGroupConnectionSumArgs = {
  field: WpNodeWithTemplateFieldSelector;
};

export type WpNodeWithTemplateSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  template?: InputMaybe<WpContentTemplateSortInput>;
};

export type WpNodeWithTitle = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>;
};

export type WpNodeWithTitleConnection = {
  __typename?: 'WpNodeWithTitleConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithTitleEdge>;
  group: Array<WpNodeWithTitleGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithTitle>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithTitleConnectionDistinctArgs = {
  field: WpNodeWithTitleFieldSelector;
};


export type WpNodeWithTitleConnectionGroupArgs = {
  field: WpNodeWithTitleFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithTitleConnectionMaxArgs = {
  field: WpNodeWithTitleFieldSelector;
};


export type WpNodeWithTitleConnectionMinArgs = {
  field: WpNodeWithTitleFieldSelector;
};


export type WpNodeWithTitleConnectionSumArgs = {
  field: WpNodeWithTitleFieldSelector;
};

export type WpNodeWithTitleEdge = {
  __typename?: 'WpNodeWithTitleEdge';
  next?: Maybe<WpNodeWithTitle>;
  node: WpNodeWithTitle;
  previous?: Maybe<WpNodeWithTitle>;
};

export type WpNodeWithTitleFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type WpNodeWithTitleFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type WpNodeWithTitleGroupConnection = {
  __typename?: 'WpNodeWithTitleGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithTitleEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithTitleGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithTitle>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithTitleGroupConnectionDistinctArgs = {
  field: WpNodeWithTitleFieldSelector;
};


export type WpNodeWithTitleGroupConnectionGroupArgs = {
  field: WpNodeWithTitleFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithTitleGroupConnectionMaxArgs = {
  field: WpNodeWithTitleFieldSelector;
};


export type WpNodeWithTitleGroupConnectionMinArgs = {
  field: WpNodeWithTitleFieldSelector;
};


export type WpNodeWithTitleGroupConnectionSumArgs = {
  field: WpNodeWithTitleFieldSelector;
};

export type WpNodeWithTitleSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  title?: InputMaybe<SortOrderEnum>;
};

export type WpNodeWithTrackbacks = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']['output']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type WpNodeWithTrackbacksConnection = {
  __typename?: 'WpNodeWithTrackbacksConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithTrackbacksEdge>;
  group: Array<WpNodeWithTrackbacksGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithTrackbacks>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithTrackbacksConnectionDistinctArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


export type WpNodeWithTrackbacksConnectionGroupArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithTrackbacksConnectionMaxArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


export type WpNodeWithTrackbacksConnectionMinArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


export type WpNodeWithTrackbacksConnectionSumArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};

export type WpNodeWithTrackbacksEdge = {
  __typename?: 'WpNodeWithTrackbacksEdge';
  next?: Maybe<WpNodeWithTrackbacks>;
  node: WpNodeWithTrackbacks;
  previous?: Maybe<WpNodeWithTrackbacks>;
};

export type WpNodeWithTrackbacksFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pingStatus?: InputMaybe<FieldSelectorEnum>;
  pinged?: InputMaybe<FieldSelectorEnum>;
  toPing?: InputMaybe<FieldSelectorEnum>;
};

export type WpNodeWithTrackbacksFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
};

export type WpNodeWithTrackbacksGroupConnection = {
  __typename?: 'WpNodeWithTrackbacksGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpNodeWithTrackbacksEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpNodeWithTrackbacksGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpNodeWithTrackbacks>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpNodeWithTrackbacksGroupConnectionDistinctArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


export type WpNodeWithTrackbacksGroupConnectionGroupArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpNodeWithTrackbacksGroupConnectionMaxArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


export type WpNodeWithTrackbacksGroupConnectionMinArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};


export type WpNodeWithTrackbacksGroupConnectionSumArgs = {
  field: WpNodeWithTrackbacksFieldSelector;
};

export type WpNodeWithTrackbacksSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pingStatus?: InputMaybe<SortOrderEnum>;
  pinged?: InputMaybe<SortOrderEnum>;
  toPing?: InputMaybe<SortOrderEnum>;
};

export type WpOneToOneConnectionType = {
  /** The connected node */
  node: WpNode;
};

/** The page type */
export type WpPage = Node & WpContentNode & WpDatabaseIdentifier & WpHierarchicalContentNode & WpHierarchicalNode & WpMenuItemLinkable & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithContentEditor & WpNodeWithFeaturedImage & WpNodeWithPageAttributes & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpPage';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionType>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']['output']>;
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>;
  /** Connection between the Page type and the Comment type */
  comments?: Maybe<WpPageToCommentConnectionType>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean']['output'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Page Sections&quot; was set to Show in GraphQL. */
  pageSections?: Maybe<WpPage_Pagesections>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionType>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeType>;
};


/** The page type */
export type WpPageDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The page type */
export type WpPageDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The page type */
export type WpPageModifiedArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The page type */
export type WpPageModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WpPageConnection = {
  __typename?: 'WpPageConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpPageEdge>;
  group: Array<WpPageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldSelector;
};


export type WpPageConnectionGroupArgs = {
  field: WpPageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpPageConnectionMaxArgs = {
  field: WpPageFieldSelector;
};


export type WpPageConnectionMinArgs = {
  field: WpPageFieldSelector;
};


export type WpPageConnectionSumArgs = {
  field: WpPageFieldSelector;
};

export type WpPageConnectionEdgeType = {
  /** The connected page Node */
  node: WpPage;
};

export type WpPageConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPageConnectionType = {
  /** A list of connected page Nodes */
  nodes: Array<WpPage>;
  /** Information about pagination in a connection. */
  pageInfo: WpPageConnectionPageInfoType;
};

export type WpPageEdge = {
  __typename?: 'WpPageEdge';
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export type WpPageFieldSelector = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFieldSelector>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  authorDatabaseId?: InputMaybe<FieldSelectorEnum>;
  authorId?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  commentCount?: InputMaybe<FieldSelectorEnum>;
  commentStatus?: InputMaybe<FieldSelectorEnum>;
  comments?: InputMaybe<WpPageToCommentConnectionTypeFieldSelector>;
  content?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  contentTypeName?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  desiredSlug?: InputMaybe<FieldSelectorEnum>;
  enclosure?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  featuredImageDatabaseId?: InputMaybe<FieldSelectorEnum>;
  featuredImageId?: InputMaybe<FieldSelectorEnum>;
  guid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isFrontPage?: InputMaybe<FieldSelectorEnum>;
  isPostsPage?: InputMaybe<FieldSelectorEnum>;
  isPrivacyPage?: InputMaybe<FieldSelectorEnum>;
  isRevision?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  link?: InputMaybe<FieldSelectorEnum>;
  menuOrder?: InputMaybe<FieldSelectorEnum>;
  modified?: InputMaybe<FieldSelectorEnum>;
  modifiedGmt?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  pageSections?: InputMaybe<WpPage_PagesectionsFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  parentDatabaseId?: InputMaybe<FieldSelectorEnum>;
  parentId?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFieldSelector>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFieldSelector>;
};

export type WpPageFilterInput = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPageToCommentConnectionTypeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  pageSections?: InputMaybe<WpPage_PagesectionsFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeFilterInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: InputMaybe<WpPageFilterInput>;
};

export type WpPageGroupConnection = {
  __typename?: 'WpPageGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpPageEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpPageGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpPageGroupConnectionDistinctArgs = {
  field: WpPageFieldSelector;
};


export type WpPageGroupConnectionGroupArgs = {
  field: WpPageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpPageGroupConnectionMaxArgs = {
  field: WpPageFieldSelector;
};


export type WpPageGroupConnectionMinArgs = {
  field: WpPageFieldSelector;
};


export type WpPageGroupConnectionSumArgs = {
  field: WpPageFieldSelector;
};

export type WpPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPageSortInput = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionTypeSortInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  authorDatabaseId?: InputMaybe<SortOrderEnum>;
  authorId?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  commentCount?: InputMaybe<SortOrderEnum>;
  commentStatus?: InputMaybe<SortOrderEnum>;
  comments?: InputMaybe<WpPageToCommentConnectionTypeSortInput>;
  content?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  contentTypeName?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  desiredSlug?: InputMaybe<SortOrderEnum>;
  enclosure?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  featuredImageDatabaseId?: InputMaybe<SortOrderEnum>;
  featuredImageId?: InputMaybe<SortOrderEnum>;
  guid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isFrontPage?: InputMaybe<SortOrderEnum>;
  isPostsPage?: InputMaybe<SortOrderEnum>;
  isPrivacyPage?: InputMaybe<SortOrderEnum>;
  isRevision?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  link?: InputMaybe<SortOrderEnum>;
  menuOrder?: InputMaybe<SortOrderEnum>;
  modified?: InputMaybe<SortOrderEnum>;
  modifiedGmt?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  pageSections?: InputMaybe<WpPage_PagesectionsSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  parentDatabaseId?: InputMaybe<SortOrderEnum>;
  parentId?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  template?: InputMaybe<WpContentTemplateSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionTypeSortInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeTypeSortInput>;
};

/** Page Info on the &quot;PageToCommentConnection&quot; */
export type WpPageToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpPageToCommentConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPageToCommentConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPageToCommentConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPageToCommentConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Page type and the Comment type */
export type WpPageToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  __typename?: 'WpPageToCommentConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpComment>;
  /** Information about pagination in a connection. */
  pageInfo: WpPageToCommentConnectionPageInfoType;
};

export type WpPageToCommentConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCommentFieldSelector>;
  pageInfo?: InputMaybe<WpPageToCommentConnectionPageInfoTypeFieldSelector>;
};

export type WpPageToCommentConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
  pageInfo?: InputMaybe<WpPageToCommentConnectionPageInfoTypeFilterInput>;
};

export type WpPageToCommentConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCommentSortInput>;
  pageInfo?: InputMaybe<WpPageToCommentConnectionPageInfoTypeSortInput>;
};

/** Field Group */
export type WpPage_Pagesections = WpAcfFieldGroup & {
  __typename?: 'WpPage_Pagesections';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Array<Maybe<WpPage_Pagesections_Section>>>;
};

export type WpPage_PagesectionsFieldSelector = {
  fieldGroupName?: InputMaybe<FieldSelectorEnum>;
};

export type WpPage_PagesectionsFilterInput = {
  fieldGroupName?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPage_PagesectionsSortInput = {
  fieldGroupName?: InputMaybe<SortOrderEnum>;
};

export type WpPage_Pagesections_Section = WpPage_Pagesections_Section_AddSection;

export type WpPage_Pagesections_Section_AddSection = WpAcfFieldGroup & {
  __typename?: 'WpPage_Pagesections_Section_AddSection';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<WpPage_Pagesections_Section_AddSection_Subtitle>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Field Group */
export type WpPage_Pagesections_Section_AddSection_Subtitle = WpAcfFieldGroup & {
  __typename?: 'WpPage_Pagesections_Section_AddSection_Subtitle';
  /** The name of the ACF Field Group */
  fieldGroupName?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<WpMediaItem>;
  label?: Maybe<Scalars['String']['output']>;
};

/** The post type */
export type WpPost = Node & WpContentNode & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithContentEditor & WpNodeWithExcerpt & WpNodeWithFeaturedImage & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithTrackbacks & WpUniformResourceIdentifiable & {
  __typename?: 'WpPost';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeType>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']['output']>;
  /** Connection between the Post type and the category type */
  categories?: Maybe<WpPostToCategoryConnectionType>;
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']['output']>;
  /** Connection between the Post type and the Comment type */
  comments?: Maybe<WpPostToCommentConnectionType>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeType>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeType>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeType>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']['output']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Connection between the Post type and the postFormat type */
  postFormats?: Maybe<WpPostToPostFormatConnectionType>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** Connection between the Post type and the tag type */
  tags?: Maybe<WpPostToTagConnectionType>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the Post type and the TermNode type */
  terms?: Maybe<WpPostToTermNodeConnectionType>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};


/** The post type */
export type WpPostDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The post type */
export type WpPostDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The post type */
export type WpPostModifiedArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The post type */
export type WpPostModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type WpPostConnection = {
  __typename?: 'WpPostConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpPostEdge>;
  group: Array<WpPostGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldSelector;
};


export type WpPostConnectionGroupArgs = {
  field: WpPostFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpPostConnectionMaxArgs = {
  field: WpPostFieldSelector;
};


export type WpPostConnectionMinArgs = {
  field: WpPostFieldSelector;
};


export type WpPostConnectionSumArgs = {
  field: WpPostFieldSelector;
};

export type WpPostConnectionEdgeType = {
  /** The connected post Node */
  node: WpPost;
};

export type WpPostConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostConnectionType = {
  /** A list of connected post Nodes */
  nodes: Array<WpPost>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostConnectionPageInfoType;
};

export type WpPostEdge = {
  __typename?: 'WpPostEdge';
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export type WpPostFieldSelector = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFieldSelector>;
  authorDatabaseId?: InputMaybe<FieldSelectorEnum>;
  authorId?: InputMaybe<FieldSelectorEnum>;
  categories?: InputMaybe<WpPostToCategoryConnectionTypeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  commentCount?: InputMaybe<FieldSelectorEnum>;
  commentStatus?: InputMaybe<FieldSelectorEnum>;
  comments?: InputMaybe<WpPostToCommentConnectionTypeFieldSelector>;
  content?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFieldSelector>;
  contentTypeName?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  date?: InputMaybe<FieldSelectorEnum>;
  dateGmt?: InputMaybe<FieldSelectorEnum>;
  desiredSlug?: InputMaybe<FieldSelectorEnum>;
  enclosure?: InputMaybe<FieldSelectorEnum>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFieldSelector>;
  featuredImageDatabaseId?: InputMaybe<FieldSelectorEnum>;
  featuredImageId?: InputMaybe<FieldSelectorEnum>;
  guid?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isRevision?: InputMaybe<FieldSelectorEnum>;
  isSticky?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFieldSelector>;
  link?: InputMaybe<FieldSelectorEnum>;
  modified?: InputMaybe<FieldSelectorEnum>;
  modifiedGmt?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  pingStatus?: InputMaybe<FieldSelectorEnum>;
  pinged?: InputMaybe<FieldSelectorEnum>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionTypeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<WpPostToTagConnectionTypeFieldSelector>;
  template?: InputMaybe<WpContentTemplateFieldSelector>;
  terms?: InputMaybe<WpPostToTermNodeConnectionTypeFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  toPing?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostFilterInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  categories?: InputMaybe<WpPostToCategoryConnectionTypeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPostToCommentConnectionTypeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isSticky?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<WpPostToTagConnectionTypeFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionTypeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: InputMaybe<WpPostFilterInput>;
};

/** The postFormat type */
export type WpPostFormat = Node & WpDatabaseIdentifier & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpPostFormat';
  children: Array<Node>;
  /** Connection between the PostFormat type and the ContentNode type */
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionType>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Connection between the PostFormat type and the post type */
  posts?: Maybe<WpPostFormatToPostConnectionType>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeType>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpPostFormatConnection = {
  __typename?: 'WpPostFormatConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpPostFormatEdge>;
  group: Array<WpPostFormatGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldSelector;
};


export type WpPostFormatConnectionGroupArgs = {
  field: WpPostFormatFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpPostFormatConnectionMaxArgs = {
  field: WpPostFormatFieldSelector;
};


export type WpPostFormatConnectionMinArgs = {
  field: WpPostFormatFieldSelector;
};


export type WpPostFormatConnectionSumArgs = {
  field: WpPostFormatFieldSelector;
};

export type WpPostFormatConnectionEdgeType = {
  /** The connected postFormat Node */
  node: WpPostFormat;
};

export type WpPostFormatConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostFormatConnectionType = {
  /** A list of connected postFormat Nodes */
  nodes: Array<WpPostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostFormatConnectionPageInfoType;
};

export type WpPostFormatEdge = {
  __typename?: 'WpPostFormatEdge';
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export type WpPostFormatFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionTypeFieldSelector>;
  count?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  posts?: InputMaybe<WpPostFormatToPostConnectionTypeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeFieldSelector>;
  taxonomyName?: InputMaybe<FieldSelectorEnum>;
  termGroupId?: InputMaybe<FieldSelectorEnum>;
  termTaxonomyId?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostFormatFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionTypeFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: InputMaybe<WpPostFormatFilterInput>;
};

export type WpPostFormatGroupConnection = {
  __typename?: 'WpPostFormatGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpPostFormatEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpPostFormatGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpPostFormatGroupConnectionDistinctArgs = {
  field: WpPostFormatFieldSelector;
};


export type WpPostFormatGroupConnectionGroupArgs = {
  field: WpPostFormatFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpPostFormatGroupConnectionMaxArgs = {
  field: WpPostFormatFieldSelector;
};


export type WpPostFormatGroupConnectionMinArgs = {
  field: WpPostFormatFieldSelector;
};


export type WpPostFormatGroupConnectionSumArgs = {
  field: WpPostFormatFieldSelector;
};

export type WpPostFormatSortInput = {
  children?: InputMaybe<NodeSortInput>;
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionTypeSortInput>;
  count?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionTypeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeTypeSortInput>;
  taxonomyName?: InputMaybe<SortOrderEnum>;
  termGroupId?: InputMaybe<SortOrderEnum>;
  termTaxonomyId?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type WpPostFormatToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpPostFormatToContentNodeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostFormatToContentNodeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostFormatToContentNodeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostFormatToContentNodeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the PostFormat type and the ContentNode type */
export type WpPostFormatToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  __typename?: 'WpPostFormatToContentNodeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostFormatToContentNodeConnectionPageInfoType;
};

export type WpPostFormatToContentNodeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentNodeFieldSelector>;
  pageInfo?: InputMaybe<WpPostFormatToContentNodeConnectionPageInfoTypeFieldSelector>;
};

export type WpPostFormatToContentNodeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
  pageInfo?: InputMaybe<WpPostFormatToContentNodeConnectionPageInfoTypeFilterInput>;
};

export type WpPostFormatToContentNodeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentNodeSortInput>;
  pageInfo?: InputMaybe<WpPostFormatToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type WpPostFormatToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  __typename?: 'WpPostFormatToPostConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostFormatToPostConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostFormatToPostConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostFormatToPostConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the PostFormat type and the post type */
export type WpPostFormatToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  __typename?: 'WpPostFormatToPostConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpPost>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostFormatToPostConnectionPageInfoType;
};

export type WpPostFormatToPostConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpPostFieldSelector>;
  pageInfo?: InputMaybe<WpPostFormatToPostConnectionPageInfoTypeFieldSelector>;
};

export type WpPostFormatToPostConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
  pageInfo?: InputMaybe<WpPostFormatToPostConnectionPageInfoTypeFilterInput>;
};

export type WpPostFormatToPostConnectionTypeSortInput = {
  nodes?: InputMaybe<WpPostSortInput>;
  pageInfo?: InputMaybe<WpPostFormatToPostConnectionPageInfoTypeSortInput>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type WpPostFormatToTaxonomyConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpTaxonomyConnectionEdgeType & {
  __typename?: 'WpPostFormatToTaxonomyConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpTaxonomy;
};

export type WpPostFormatToTaxonomyConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpTaxonomyFieldSelector>;
};

export type WpPostFormatToTaxonomyConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpPostFormatToTaxonomyConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpTaxonomySortInput>;
};

export type WpPostGroupConnection = {
  __typename?: 'WpPostGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpPostEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpPostGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpPostGroupConnectionDistinctArgs = {
  field: WpPostFieldSelector;
};


export type WpPostGroupConnectionGroupArgs = {
  field: WpPostFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpPostGroupConnectionMaxArgs = {
  field: WpPostFieldSelector;
};


export type WpPostGroupConnectionMinArgs = {
  field: WpPostFieldSelector;
};


export type WpPostGroupConnectionSumArgs = {
  field: WpPostFieldSelector;
};

export type WpPostSortInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeTypeSortInput>;
  authorDatabaseId?: InputMaybe<SortOrderEnum>;
  authorId?: InputMaybe<SortOrderEnum>;
  categories?: InputMaybe<WpPostToCategoryConnectionTypeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  commentCount?: InputMaybe<SortOrderEnum>;
  commentStatus?: InputMaybe<SortOrderEnum>;
  comments?: InputMaybe<WpPostToCommentConnectionTypeSortInput>;
  content?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeTypeSortInput>;
  contentTypeName?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  date?: InputMaybe<SortOrderEnum>;
  dateGmt?: InputMaybe<SortOrderEnum>;
  desiredSlug?: InputMaybe<SortOrderEnum>;
  enclosure?: InputMaybe<SortOrderEnum>;
  excerpt?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeTypeSortInput>;
  featuredImageDatabaseId?: InputMaybe<SortOrderEnum>;
  featuredImageId?: InputMaybe<SortOrderEnum>;
  guid?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isRevision?: InputMaybe<SortOrderEnum>;
  isSticky?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeTypeSortInput>;
  link?: InputMaybe<SortOrderEnum>;
  modified?: InputMaybe<SortOrderEnum>;
  modifiedGmt?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  pingStatus?: InputMaybe<SortOrderEnum>;
  pinged?: InputMaybe<SortOrderEnum>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionTypeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<WpPostToTagConnectionTypeSortInput>;
  template?: InputMaybe<WpContentTemplateSortInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionTypeSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  toPing?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type WpPostToCategoryConnectionPageInfoType = WpCategoryConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpPostToCategoryConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostToCategoryConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostToCategoryConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostToCategoryConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the category type */
export type WpPostToCategoryConnectionType = WpCategoryConnectionType & WpConnectionType & {
  __typename?: 'WpPostToCategoryConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpCategory>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostToCategoryConnectionPageInfoType;
};

export type WpPostToCategoryConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCategoryFieldSelector>;
  pageInfo?: InputMaybe<WpPostToCategoryConnectionPageInfoTypeFieldSelector>;
};

export type WpPostToCategoryConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
  pageInfo?: InputMaybe<WpPostToCategoryConnectionPageInfoTypeFilterInput>;
};

export type WpPostToCategoryConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCategorySortInput>;
  pageInfo?: InputMaybe<WpPostToCategoryConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToCommentConnection&quot; */
export type WpPostToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpPostToCommentConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostToCommentConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostToCommentConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostToCommentConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the Comment type */
export type WpPostToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  __typename?: 'WpPostToCommentConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpComment>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostToCommentConnectionPageInfoType;
};

export type WpPostToCommentConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCommentFieldSelector>;
  pageInfo?: InputMaybe<WpPostToCommentConnectionPageInfoTypeFieldSelector>;
};

export type WpPostToCommentConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
  pageInfo?: InputMaybe<WpPostToCommentConnectionPageInfoTypeFilterInput>;
};

export type WpPostToCommentConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCommentSortInput>;
  pageInfo?: InputMaybe<WpPostToCommentConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type WpPostToPostFormatConnectionPageInfoType = WpPageInfoType & WpPostFormatConnectionPageInfoType & {
  __typename?: 'WpPostToPostFormatConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostToPostFormatConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostToPostFormatConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostToPostFormatConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the postFormat type */
export type WpPostToPostFormatConnectionType = WpConnectionType & WpPostFormatConnectionType & {
  __typename?: 'WpPostToPostFormatConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpPostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostToPostFormatConnectionPageInfoType;
};

export type WpPostToPostFormatConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpPostFormatFieldSelector>;
  pageInfo?: InputMaybe<WpPostToPostFormatConnectionPageInfoTypeFieldSelector>;
};

export type WpPostToPostFormatConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpPostFormatFilterListInput>;
  pageInfo?: InputMaybe<WpPostToPostFormatConnectionPageInfoTypeFilterInput>;
};

export type WpPostToPostFormatConnectionTypeSortInput = {
  nodes?: InputMaybe<WpPostFormatSortInput>;
  pageInfo?: InputMaybe<WpPostToPostFormatConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToTagConnection&quot; */
export type WpPostToTagConnectionPageInfoType = WpPageInfoType & WpTagConnectionPageInfoType & {
  __typename?: 'WpPostToTagConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostToTagConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostToTagConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostToTagConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the tag type */
export type WpPostToTagConnectionType = WpConnectionType & WpTagConnectionType & {
  __typename?: 'WpPostToTagConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpTag>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostToTagConnectionPageInfoType;
};

export type WpPostToTagConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpTagFieldSelector>;
  pageInfo?: InputMaybe<WpPostToTagConnectionPageInfoTypeFieldSelector>;
};

export type WpPostToTagConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpTagFilterListInput>;
  pageInfo?: InputMaybe<WpPostToTagConnectionPageInfoTypeFilterInput>;
};

export type WpPostToTagConnectionTypeSortInput = {
  nodes?: InputMaybe<WpTagSortInput>;
  pageInfo?: InputMaybe<WpPostToTagConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type WpPostToTermNodeConnectionPageInfoType = WpPageInfoType & WpTermNodeConnectionPageInfoType & {
  __typename?: 'WpPostToTermNodeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpPostToTermNodeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostToTermNodeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostToTermNodeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Post type and the TermNode type */
export type WpPostToTermNodeConnectionType = WpConnectionType & WpTermNodeConnectionType & {
  __typename?: 'WpPostToTermNodeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpTermNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpPostToTermNodeConnectionPageInfoType;
};

export type WpPostToTermNodeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpTermNodeFieldSelector>;
  pageInfo?: InputMaybe<WpPostToTermNodeConnectionPageInfoTypeFieldSelector>;
};

export type WpPostToTermNodeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpTermNodeFilterListInput>;
  pageInfo?: InputMaybe<WpPostToTermNodeConnectionPageInfoTypeFilterInput>;
};

export type WpPostToTermNodeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpTermNodeSortInput>;
  pageInfo?: InputMaybe<WpPostToTermNodeConnectionPageInfoTypeSortInput>;
};

/** Details for labels of the PostType */
export type WpPostTypeLabelDetails = {
  __typename?: 'WpPostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']['output']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']['output']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']['output']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']['output']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']['output']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']['output']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']['output']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']['output']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']['output']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']['output']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']['output']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']['output']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']['output']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']['output']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']['output']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']['output']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']['output']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']['output']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']['output']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']['output']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']['output']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']['output']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']['output']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']['output']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']['output']>;
};

export type WpPostTypeLabelDetailsFieldSelector = {
  addNew?: InputMaybe<FieldSelectorEnum>;
  addNewItem?: InputMaybe<FieldSelectorEnum>;
  allItems?: InputMaybe<FieldSelectorEnum>;
  archives?: InputMaybe<FieldSelectorEnum>;
  attributes?: InputMaybe<FieldSelectorEnum>;
  editItem?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<FieldSelectorEnum>;
  filterItemsList?: InputMaybe<FieldSelectorEnum>;
  insertIntoItem?: InputMaybe<FieldSelectorEnum>;
  itemsList?: InputMaybe<FieldSelectorEnum>;
  itemsListNavigation?: InputMaybe<FieldSelectorEnum>;
  menuName?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  newItem?: InputMaybe<FieldSelectorEnum>;
  notFound?: InputMaybe<FieldSelectorEnum>;
  notFoundInTrash?: InputMaybe<FieldSelectorEnum>;
  parentItemColon?: InputMaybe<FieldSelectorEnum>;
  removeFeaturedImage?: InputMaybe<FieldSelectorEnum>;
  searchItems?: InputMaybe<FieldSelectorEnum>;
  setFeaturedImage?: InputMaybe<FieldSelectorEnum>;
  singularName?: InputMaybe<FieldSelectorEnum>;
  uploadedToThisItem?: InputMaybe<FieldSelectorEnum>;
  useFeaturedImage?: InputMaybe<FieldSelectorEnum>;
  viewItem?: InputMaybe<FieldSelectorEnum>;
  viewItems?: InputMaybe<FieldSelectorEnum>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: InputMaybe<StringQueryOperatorInput>;
  addNewItem?: InputMaybe<StringQueryOperatorInput>;
  allItems?: InputMaybe<StringQueryOperatorInput>;
  archives?: InputMaybe<StringQueryOperatorInput>;
  attributes?: InputMaybe<StringQueryOperatorInput>;
  editItem?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<StringQueryOperatorInput>;
  filterItemsList?: InputMaybe<StringQueryOperatorInput>;
  insertIntoItem?: InputMaybe<StringQueryOperatorInput>;
  itemsList?: InputMaybe<StringQueryOperatorInput>;
  itemsListNavigation?: InputMaybe<StringQueryOperatorInput>;
  menuName?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  newItem?: InputMaybe<StringQueryOperatorInput>;
  notFound?: InputMaybe<StringQueryOperatorInput>;
  notFoundInTrash?: InputMaybe<StringQueryOperatorInput>;
  parentItemColon?: InputMaybe<StringQueryOperatorInput>;
  removeFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  searchItems?: InputMaybe<StringQueryOperatorInput>;
  setFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  singularName?: InputMaybe<StringQueryOperatorInput>;
  uploadedToThisItem?: InputMaybe<StringQueryOperatorInput>;
  useFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  viewItem?: InputMaybe<StringQueryOperatorInput>;
  viewItems?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostTypeLabelDetailsSortInput = {
  addNew?: InputMaybe<SortOrderEnum>;
  addNewItem?: InputMaybe<SortOrderEnum>;
  allItems?: InputMaybe<SortOrderEnum>;
  archives?: InputMaybe<SortOrderEnum>;
  attributes?: InputMaybe<SortOrderEnum>;
  editItem?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<SortOrderEnum>;
  filterItemsList?: InputMaybe<SortOrderEnum>;
  insertIntoItem?: InputMaybe<SortOrderEnum>;
  itemsList?: InputMaybe<SortOrderEnum>;
  itemsListNavigation?: InputMaybe<SortOrderEnum>;
  menuName?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  newItem?: InputMaybe<SortOrderEnum>;
  notFound?: InputMaybe<SortOrderEnum>;
  notFoundInTrash?: InputMaybe<SortOrderEnum>;
  parentItemColon?: InputMaybe<SortOrderEnum>;
  removeFeaturedImage?: InputMaybe<SortOrderEnum>;
  searchItems?: InputMaybe<SortOrderEnum>;
  setFeaturedImage?: InputMaybe<SortOrderEnum>;
  singularName?: InputMaybe<SortOrderEnum>;
  uploadedToThisItem?: InputMaybe<SortOrderEnum>;
  useFeaturedImage?: InputMaybe<SortOrderEnum>;
  viewItem?: InputMaybe<SortOrderEnum>;
  viewItems?: InputMaybe<SortOrderEnum>;
};

/** The reading setting type */
export type WpReadingSettings = {
  __typename?: 'WpReadingSettings';
  /** The ID of the page that should display the latest posts */
  pageForPosts?: Maybe<Scalars['Int']['output']>;
  /** The ID of the page that should be displayed on the front page */
  pageOnFront?: Maybe<Scalars['Int']['output']>;
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']['output']>;
  /** What to show on the front page */
  showOnFront?: Maybe<Scalars['String']['output']>;
};

export type WpReadingSettingsFieldSelector = {
  pageForPosts?: InputMaybe<FieldSelectorEnum>;
  pageOnFront?: InputMaybe<FieldSelectorEnum>;
  postsPerPage?: InputMaybe<FieldSelectorEnum>;
  showOnFront?: InputMaybe<FieldSelectorEnum>;
};

export type WpReadingSettingsFilterInput = {
  pageForPosts?: InputMaybe<IntQueryOperatorInput>;
  pageOnFront?: InputMaybe<IntQueryOperatorInput>;
  postsPerPage?: InputMaybe<IntQueryOperatorInput>;
  showOnFront?: InputMaybe<StringQueryOperatorInput>;
};

export type WpReadingSettingsSortInput = {
  pageForPosts?: InputMaybe<SortOrderEnum>;
  pageOnFront?: InputMaybe<SortOrderEnum>;
  postsPerPage?: InputMaybe<SortOrderEnum>;
  showOnFront?: InputMaybe<SortOrderEnum>;
};

/** All of the registered settings */
export type WpSettings = {
  __typename?: 'WpSettings';
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']['output']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']['output']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageForPosts?: Maybe<Scalars['Int']['output']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront?: Maybe<Scalars['Int']['output']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']['output']>;
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront?: Maybe<Scalars['String']['output']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']['output']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']['output']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']['output']>;
};

export type WpSettingsFieldSelector = {
  discussionSettingsDefaultCommentStatus?: InputMaybe<FieldSelectorEnum>;
  discussionSettingsDefaultPingStatus?: InputMaybe<FieldSelectorEnum>;
  generalSettingsDateFormat?: InputMaybe<FieldSelectorEnum>;
  generalSettingsDescription?: InputMaybe<FieldSelectorEnum>;
  generalSettingsEmail?: InputMaybe<FieldSelectorEnum>;
  generalSettingsLanguage?: InputMaybe<FieldSelectorEnum>;
  generalSettingsStartOfWeek?: InputMaybe<FieldSelectorEnum>;
  generalSettingsTimeFormat?: InputMaybe<FieldSelectorEnum>;
  generalSettingsTimezone?: InputMaybe<FieldSelectorEnum>;
  generalSettingsTitle?: InputMaybe<FieldSelectorEnum>;
  generalSettingsUrl?: InputMaybe<FieldSelectorEnum>;
  readingSettingsPageForPosts?: InputMaybe<FieldSelectorEnum>;
  readingSettingsPageOnFront?: InputMaybe<FieldSelectorEnum>;
  readingSettingsPostsPerPage?: InputMaybe<FieldSelectorEnum>;
  readingSettingsShowOnFront?: InputMaybe<FieldSelectorEnum>;
  writingSettingsDefaultCategory?: InputMaybe<FieldSelectorEnum>;
  writingSettingsDefaultPostFormat?: InputMaybe<FieldSelectorEnum>;
  writingSettingsUseSmilies?: InputMaybe<FieldSelectorEnum>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: InputMaybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsDescription?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsEmail?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: InputMaybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsTitle?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsUrl?: InputMaybe<StringQueryOperatorInput>;
  readingSettingsPageForPosts?: InputMaybe<IntQueryOperatorInput>;
  readingSettingsPageOnFront?: InputMaybe<IntQueryOperatorInput>;
  readingSettingsPostsPerPage?: InputMaybe<IntQueryOperatorInput>;
  readingSettingsShowOnFront?: InputMaybe<StringQueryOperatorInput>;
  writingSettingsDefaultCategory?: InputMaybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: InputMaybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpSettingsSortInput = {
  discussionSettingsDefaultCommentStatus?: InputMaybe<SortOrderEnum>;
  discussionSettingsDefaultPingStatus?: InputMaybe<SortOrderEnum>;
  generalSettingsDateFormat?: InputMaybe<SortOrderEnum>;
  generalSettingsDescription?: InputMaybe<SortOrderEnum>;
  generalSettingsEmail?: InputMaybe<SortOrderEnum>;
  generalSettingsLanguage?: InputMaybe<SortOrderEnum>;
  generalSettingsStartOfWeek?: InputMaybe<SortOrderEnum>;
  generalSettingsTimeFormat?: InputMaybe<SortOrderEnum>;
  generalSettingsTimezone?: InputMaybe<SortOrderEnum>;
  generalSettingsTitle?: InputMaybe<SortOrderEnum>;
  generalSettingsUrl?: InputMaybe<SortOrderEnum>;
  readingSettingsPageForPosts?: InputMaybe<SortOrderEnum>;
  readingSettingsPageOnFront?: InputMaybe<SortOrderEnum>;
  readingSettingsPostsPerPage?: InputMaybe<SortOrderEnum>;
  readingSettingsShowOnFront?: InputMaybe<SortOrderEnum>;
  writingSettingsDefaultCategory?: InputMaybe<SortOrderEnum>;
  writingSettingsDefaultPostFormat?: InputMaybe<SortOrderEnum>;
  writingSettingsUseSmilies?: InputMaybe<SortOrderEnum>;
};

export type WpSortInput = {
  allSettings?: InputMaybe<WpSettingsSortInput>;
  children?: InputMaybe<NodeSortInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsSortInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  readingSettings?: InputMaybe<WpReadingSettingsSortInput>;
  wpGatsby?: InputMaybe<WpWpGatsbySortInput>;
  writingSettings?: InputMaybe<WpWritingSettingsSortInput>;
};

/** The tag type */
export type WpTag = Node & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpTag';
  children: Array<Node>;
  /** Connection between the Tag type and the ContentNode type */
  contentNodes?: Maybe<WpTagToContentNodeConnectionType>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Connection between the Tag type and the post type */
  posts?: Maybe<WpTagToPostConnectionType>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Connection between the Tag type and the Taxonomy type */
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeType>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpTagConnection = {
  __typename?: 'WpTagConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpTagEdge>;
  group: Array<WpTagGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldSelector;
};


export type WpTagConnectionGroupArgs = {
  field: WpTagFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpTagConnectionMaxArgs = {
  field: WpTagFieldSelector;
};


export type WpTagConnectionMinArgs = {
  field: WpTagFieldSelector;
};


export type WpTagConnectionSumArgs = {
  field: WpTagFieldSelector;
};

export type WpTagConnectionEdgeType = {
  /** The connected tag Node */
  node: WpTag;
};

export type WpTagConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTagConnectionType = {
  /** A list of connected tag Nodes */
  nodes: Array<WpTag>;
  /** Information about pagination in a connection. */
  pageInfo: WpTagConnectionPageInfoType;
};

export type WpTagEdge = {
  __typename?: 'WpTagEdge';
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export type WpTagFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionTypeFieldSelector>;
  count?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  posts?: InputMaybe<WpTagToPostConnectionTypeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeFieldSelector>;
  taxonomyName?: InputMaybe<FieldSelectorEnum>;
  termGroupId?: InputMaybe<FieldSelectorEnum>;
  termTaxonomyId?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpTagFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionTypeFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpTagToPostConnectionTypeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: InputMaybe<WpTagFilterInput>;
};

export type WpTagGroupConnection = {
  __typename?: 'WpTagGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpTagEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpTagGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpTagGroupConnectionDistinctArgs = {
  field: WpTagFieldSelector;
};


export type WpTagGroupConnectionGroupArgs = {
  field: WpTagFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpTagGroupConnectionMaxArgs = {
  field: WpTagFieldSelector;
};


export type WpTagGroupConnectionMinArgs = {
  field: WpTagFieldSelector;
};


export type WpTagGroupConnectionSumArgs = {
  field: WpTagFieldSelector;
};

export type WpTagSortInput = {
  children?: InputMaybe<NodeSortInput>;
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionTypeSortInput>;
  count?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  posts?: InputMaybe<WpTagToPostConnectionTypeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeTypeSortInput>;
  taxonomyName?: InputMaybe<SortOrderEnum>;
  termGroupId?: InputMaybe<SortOrderEnum>;
  termTaxonomyId?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type WpTagToContentNodeConnectionPageInfoType = WpContentNodeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpTagToContentNodeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTagToContentNodeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpTagToContentNodeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTagToContentNodeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Tag type and the ContentNode type */
export type WpTagToContentNodeConnectionType = WpConnectionType & WpContentNodeConnectionType & {
  __typename?: 'WpTagToContentNodeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpTagToContentNodeConnectionPageInfoType;
};

export type WpTagToContentNodeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentNodeFieldSelector>;
  pageInfo?: InputMaybe<WpTagToContentNodeConnectionPageInfoTypeFieldSelector>;
};

export type WpTagToContentNodeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
  pageInfo?: InputMaybe<WpTagToContentNodeConnectionPageInfoTypeFilterInput>;
};

export type WpTagToContentNodeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentNodeSortInput>;
  pageInfo?: InputMaybe<WpTagToContentNodeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;TagToPostConnection&quot; */
export type WpTagToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  __typename?: 'WpTagToPostConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTagToPostConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpTagToPostConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTagToPostConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Tag type and the post type */
export type WpTagToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  __typename?: 'WpTagToPostConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpPost>;
  /** Information about pagination in a connection. */
  pageInfo: WpTagToPostConnectionPageInfoType;
};

export type WpTagToPostConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpPostFieldSelector>;
  pageInfo?: InputMaybe<WpTagToPostConnectionPageInfoTypeFieldSelector>;
};

export type WpTagToPostConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
  pageInfo?: InputMaybe<WpTagToPostConnectionPageInfoTypeFilterInput>;
};

export type WpTagToPostConnectionTypeSortInput = {
  nodes?: InputMaybe<WpPostSortInput>;
  pageInfo?: InputMaybe<WpTagToPostConnectionPageInfoTypeSortInput>;
};

/** Connection between the Tag type and the Taxonomy type */
export type WpTagToTaxonomyConnectionEdgeType = WpEdgeType & WpOneToOneConnectionType & WpTaxonomyConnectionEdgeType & {
  __typename?: 'WpTagToTaxonomyConnectionEdgeType';
  /** The node of the connection, without the edges */
  node: WpTaxonomy;
};

export type WpTagToTaxonomyConnectionEdgeTypeFieldSelector = {
  node?: InputMaybe<WpTaxonomyFieldSelector>;
};

export type WpTagToTaxonomyConnectionEdgeTypeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpTagToTaxonomyConnectionEdgeTypeSortInput = {
  node?: InputMaybe<WpTaxonomySortInput>;
};

/** A taxonomy object */
export type WpTaxonomy = Node & WpNode & {
  __typename?: 'WpTaxonomy';
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']['output']>;
  children: Array<Node>;
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionType>;
  /** List of Term Nodes associated with the Taxonomy */
  connectedTerms?: Maybe<WpTaxonomyToTermNodeConnectionType>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']['output']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']['output']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']['output']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']['output']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']['output']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']['output']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']['output']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']['output']>;
};

export type WpTaxonomyConnection = {
  __typename?: 'WpTaxonomyConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpTaxonomyEdge>;
  group: Array<WpTaxonomyGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldSelector;
};


export type WpTaxonomyConnectionGroupArgs = {
  field: WpTaxonomyFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpTaxonomyConnectionMaxArgs = {
  field: WpTaxonomyFieldSelector;
};


export type WpTaxonomyConnectionMinArgs = {
  field: WpTaxonomyFieldSelector;
};


export type WpTaxonomyConnectionSumArgs = {
  field: WpTaxonomyFieldSelector;
};

export type WpTaxonomyConnectionEdgeType = {
  /** The connected Taxonomy Node */
  node: WpTaxonomy;
};

export type WpTaxonomyConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTaxonomyConnectionType = {
  /** A list of connected Taxonomy Nodes */
  nodes: Array<WpTaxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: WpTaxonomyConnectionPageInfoType;
};

export type WpTaxonomyEdge = {
  __typename?: 'WpTaxonomyEdge';
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export type WpTaxonomyFieldSelector = {
  archivePath?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionTypeFieldSelector>;
  connectedTerms?: InputMaybe<WpTaxonomyToTermNodeConnectionTypeFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  graphqlPluralName?: InputMaybe<FieldSelectorEnum>;
  graphqlSingleName?: InputMaybe<FieldSelectorEnum>;
  hierarchical?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  label?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  public?: InputMaybe<FieldSelectorEnum>;
  restBase?: InputMaybe<FieldSelectorEnum>;
  restControllerClass?: InputMaybe<FieldSelectorEnum>;
  showCloud?: InputMaybe<FieldSelectorEnum>;
  showInAdminColumn?: InputMaybe<FieldSelectorEnum>;
  showInGraphql?: InputMaybe<FieldSelectorEnum>;
  showInMenu?: InputMaybe<FieldSelectorEnum>;
  showInNavMenus?: InputMaybe<FieldSelectorEnum>;
  showInQuickEdit?: InputMaybe<FieldSelectorEnum>;
  showInRest?: InputMaybe<FieldSelectorEnum>;
  showUi?: InputMaybe<FieldSelectorEnum>;
};

export type WpTaxonomyFilterInput = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionTypeFilterInput>;
  connectedTerms?: InputMaybe<WpTaxonomyToTermNodeConnectionTypeFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showCloud?: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyGroupConnection = {
  __typename?: 'WpTaxonomyGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpTaxonomyEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpTaxonomyGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpTaxonomyGroupConnectionDistinctArgs = {
  field: WpTaxonomyFieldSelector;
};


export type WpTaxonomyGroupConnectionGroupArgs = {
  field: WpTaxonomyFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpTaxonomyGroupConnectionMaxArgs = {
  field: WpTaxonomyFieldSelector;
};


export type WpTaxonomyGroupConnectionMinArgs = {
  field: WpTaxonomyFieldSelector;
};


export type WpTaxonomyGroupConnectionSumArgs = {
  field: WpTaxonomyFieldSelector;
};

export type WpTaxonomySortInput = {
  archivePath?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionTypeSortInput>;
  connectedTerms?: InputMaybe<WpTaxonomyToTermNodeConnectionTypeSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  graphqlPluralName?: InputMaybe<SortOrderEnum>;
  graphqlSingleName?: InputMaybe<SortOrderEnum>;
  hierarchical?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  label?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  public?: InputMaybe<SortOrderEnum>;
  restBase?: InputMaybe<SortOrderEnum>;
  restControllerClass?: InputMaybe<SortOrderEnum>;
  showCloud?: InputMaybe<SortOrderEnum>;
  showInAdminColumn?: InputMaybe<SortOrderEnum>;
  showInGraphql?: InputMaybe<SortOrderEnum>;
  showInMenu?: InputMaybe<SortOrderEnum>;
  showInNavMenus?: InputMaybe<SortOrderEnum>;
  showInQuickEdit?: InputMaybe<SortOrderEnum>;
  showInRest?: InputMaybe<SortOrderEnum>;
  showUi?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type WpTaxonomyToContentTypeConnectionPageInfoType = WpContentTypeConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpTaxonomyToContentTypeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTaxonomyToContentTypeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpTaxonomyToContentTypeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTaxonomyToContentTypeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type WpTaxonomyToContentTypeConnectionType = WpConnectionType & WpContentTypeConnectionType & {
  __typename?: 'WpTaxonomyToContentTypeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpContentType>;
  /** Information about pagination in a connection. */
  pageInfo: WpTaxonomyToContentTypeConnectionPageInfoType;
};

export type WpTaxonomyToContentTypeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpContentTypeFieldSelector>;
  pageInfo?: InputMaybe<WpTaxonomyToContentTypeConnectionPageInfoTypeFieldSelector>;
};

export type WpTaxonomyToContentTypeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpContentTypeFilterListInput>;
  pageInfo?: InputMaybe<WpTaxonomyToContentTypeConnectionPageInfoTypeFilterInput>;
};

export type WpTaxonomyToContentTypeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpContentTypeSortInput>;
  pageInfo?: InputMaybe<WpTaxonomyToContentTypeConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export type WpTaxonomyToTermNodeConnectionPageInfoType = WpPageInfoType & WpTermNodeConnectionPageInfoType & {
  __typename?: 'WpTaxonomyToTermNodeConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTaxonomyToTermNodeConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpTaxonomyToTermNodeConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTaxonomyToTermNodeConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the Taxonomy type and the TermNode type */
export type WpTaxonomyToTermNodeConnectionType = WpConnectionType & WpTermNodeConnectionType & {
  __typename?: 'WpTaxonomyToTermNodeConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpTermNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpTaxonomyToTermNodeConnectionPageInfoType;
};

export type WpTaxonomyToTermNodeConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpTermNodeFieldSelector>;
  pageInfo?: InputMaybe<WpTaxonomyToTermNodeConnectionPageInfoTypeFieldSelector>;
};

export type WpTaxonomyToTermNodeConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpTermNodeFilterListInput>;
  pageInfo?: InputMaybe<WpTaxonomyToTermNodeConnectionPageInfoTypeFilterInput>;
};

export type WpTaxonomyToTermNodeConnectionTypeSortInput = {
  nodes?: InputMaybe<WpTermNodeSortInput>;
  pageInfo?: InputMaybe<WpTaxonomyToTermNodeConnectionPageInfoTypeSortInput>;
};

/** The template assigned to the node */
export type WpTemplate_PageNoTitle = WpContentTemplate & {
  __typename?: 'WpTemplate_PageNoTitle';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>;
};

/** The template assigned to the node */
export type WpTemplate_PageWithSidebar = WpContentTemplate & {
  __typename?: 'WpTemplate_PageWithSidebar';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>;
};

/** The template assigned to the node */
export type WpTemplate_PageWithWideImage = WpContentTemplate & {
  __typename?: 'WpTemplate_PageWithWideImage';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>;
};

/** The template assigned to the node */
export type WpTemplate_SingleWithSidebar = WpContentTemplate & {
  __typename?: 'WpTemplate_SingleWithSidebar';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']['output']>;
};

export type WpTermNode = {
  children: Array<Node>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']['output']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link?: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpTermNodeConnection = {
  __typename?: 'WpTermNodeConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpTermNodeEdge>;
  group: Array<WpTermNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldSelector;
};


export type WpTermNodeConnectionGroupArgs = {
  field: WpTermNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpTermNodeConnectionMaxArgs = {
  field: WpTermNodeFieldSelector;
};


export type WpTermNodeConnectionMinArgs = {
  field: WpTermNodeFieldSelector;
};


export type WpTermNodeConnectionSumArgs = {
  field: WpTermNodeFieldSelector;
};

export type WpTermNodeConnectionEdgeType = {
  /** The connected TermNode Node */
  node: WpTermNode;
};

export type WpTermNodeConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpTermNodeConnectionType = {
  /** A list of connected TermNode Nodes */
  nodes: Array<WpTermNode>;
  /** Information about pagination in a connection. */
  pageInfo: WpTermNodeConnectionPageInfoType;
};

export type WpTermNodeEdge = {
  __typename?: 'WpTermNodeEdge';
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export type WpTermNodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  count?: InputMaybe<FieldSelectorEnum>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  slug?: InputMaybe<FieldSelectorEnum>;
  taxonomyName?: InputMaybe<FieldSelectorEnum>;
  termGroupId?: InputMaybe<FieldSelectorEnum>;
  termTaxonomyId?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpTermNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: InputMaybe<WpTermNodeFilterInput>;
};

export type WpTermNodeGroupConnection = {
  __typename?: 'WpTermNodeGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpTermNodeEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpTermNodeGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpTermNodeGroupConnectionDistinctArgs = {
  field: WpTermNodeFieldSelector;
};


export type WpTermNodeGroupConnectionGroupArgs = {
  field: WpTermNodeFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpTermNodeGroupConnectionMaxArgs = {
  field: WpTermNodeFieldSelector;
};


export type WpTermNodeGroupConnectionMinArgs = {
  field: WpTermNodeFieldSelector;
};


export type WpTermNodeGroupConnectionSumArgs = {
  field: WpTermNodeFieldSelector;
};

export type WpTermNodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  count?: InputMaybe<SortOrderEnum>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  slug?: InputMaybe<SortOrderEnum>;
  taxonomyName?: InputMaybe<SortOrderEnum>;
  termGroupId?: InputMaybe<SortOrderEnum>;
  termTaxonomyId?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
};

export type WpUniformResourceIdentifiable = {
  children: Array<Node>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

export type WpUniformResourceIdentifiableConnection = {
  __typename?: 'WpUniformResourceIdentifiableConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpUniformResourceIdentifiableEdge>;
  group: Array<WpUniformResourceIdentifiableGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpUniformResourceIdentifiable>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpUniformResourceIdentifiableConnectionDistinctArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


export type WpUniformResourceIdentifiableConnectionGroupArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpUniformResourceIdentifiableConnectionMaxArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


export type WpUniformResourceIdentifiableConnectionMinArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


export type WpUniformResourceIdentifiableConnectionSumArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};

export type WpUniformResourceIdentifiableEdge = {
  __typename?: 'WpUniformResourceIdentifiableEdge';
  next?: Maybe<WpUniformResourceIdentifiable>;
  node: WpUniformResourceIdentifiable;
  previous?: Maybe<WpUniformResourceIdentifiable>;
};

export type WpUniformResourceIdentifiableFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  uri?: InputMaybe<FieldSelectorEnum>;
};

export type WpUniformResourceIdentifiableFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUniformResourceIdentifiableGroupConnection = {
  __typename?: 'WpUniformResourceIdentifiableGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpUniformResourceIdentifiableEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpUniformResourceIdentifiableGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpUniformResourceIdentifiable>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpUniformResourceIdentifiableGroupConnectionDistinctArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


export type WpUniformResourceIdentifiableGroupConnectionGroupArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpUniformResourceIdentifiableGroupConnectionMaxArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


export type WpUniformResourceIdentifiableGroupConnectionMinArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};


export type WpUniformResourceIdentifiableGroupConnectionSumArgs = {
  field: WpUniformResourceIdentifiableFieldSelector;
};

export type WpUniformResourceIdentifiableSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  uri?: InputMaybe<SortOrderEnum>;
};

/** A User object */
export type WpUser = Node & WpCommenter & WpDatabaseIdentifier & WpNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpUser';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']['output']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  children: Array<Node>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpUserToCommentConnectionType>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']['output']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']['output']>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']['output']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
  name?: Maybe<Scalars['String']['output']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']['output']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpUserToPageConnectionType>;
  parent?: Maybe<Node>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpUserToPostConnectionType>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpUserToUserRoleConnectionType>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  shouldShowAdminToolbar?: Maybe<Scalars['Boolean']['output']>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']['output']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']['output']>;
};

export type WpUserConnection = {
  __typename?: 'WpUserConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpUserEdge>;
  group: Array<WpUserGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldSelector;
};


export type WpUserConnectionGroupArgs = {
  field: WpUserFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpUserConnectionMaxArgs = {
  field: WpUserFieldSelector;
};


export type WpUserConnectionMinArgs = {
  field: WpUserFieldSelector;
};


export type WpUserConnectionSumArgs = {
  field: WpUserFieldSelector;
};

export type WpUserConnectionEdgeType = {
  /** The connected User Node */
  node: WpUser;
};

export type WpUserConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpUserConnectionType = {
  /** A list of connected User Nodes */
  nodes: Array<WpUser>;
  /** Information about pagination in a connection. */
  pageInfo: WpUserConnectionPageInfoType;
};

export type WpUserEdge = {
  __typename?: 'WpUserEdge';
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export type WpUserFieldSelector = {
  avatar?: InputMaybe<WpAvatarFieldSelector>;
  capKey?: InputMaybe<FieldSelectorEnum>;
  capabilities?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  comments?: InputMaybe<WpUserToCommentConnectionTypeFieldSelector>;
  databaseId?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  email?: InputMaybe<FieldSelectorEnum>;
  extraCapabilities?: InputMaybe<FieldSelectorEnum>;
  firstName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isContentNode?: InputMaybe<FieldSelectorEnum>;
  isTermNode?: InputMaybe<FieldSelectorEnum>;
  lastName?: InputMaybe<FieldSelectorEnum>;
  locale?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  nicename?: InputMaybe<FieldSelectorEnum>;
  nickname?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  pages?: InputMaybe<WpUserToPageConnectionTypeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  posts?: InputMaybe<WpUserToPostConnectionTypeFieldSelector>;
  registeredDate?: InputMaybe<FieldSelectorEnum>;
  roles?: InputMaybe<WpUserToUserRoleConnectionTypeFieldSelector>;
  shouldShowAdminToolbar?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  uri?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  username?: InputMaybe<FieldSelectorEnum>;
};

export type WpUserFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  capKey?: InputMaybe<StringQueryOperatorInput>;
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  comments?: InputMaybe<WpUserToCommentConnectionTypeFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nicename?: InputMaybe<StringQueryOperatorInput>;
  nickname?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<WpUserToPageConnectionTypeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpUserToPostConnectionTypeFilterInput>;
  registeredDate?: InputMaybe<StringQueryOperatorInput>;
  roles?: InputMaybe<WpUserToUserRoleConnectionTypeFilterInput>;
  shouldShowAdminToolbar?: InputMaybe<BooleanQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUserGroupConnection = {
  __typename?: 'WpUserGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpUserEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpUserGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpUserGroupConnectionDistinctArgs = {
  field: WpUserFieldSelector;
};


export type WpUserGroupConnectionGroupArgs = {
  field: WpUserFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpUserGroupConnectionMaxArgs = {
  field: WpUserFieldSelector;
};


export type WpUserGroupConnectionMinArgs = {
  field: WpUserFieldSelector;
};


export type WpUserGroupConnectionSumArgs = {
  field: WpUserFieldSelector;
};

/** A user role object */
export type WpUserRole = Node & WpNode & {
  __typename?: 'WpUserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  children: Array<Node>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internal: Internal;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Node>;
};

export type WpUserRoleConnection = {
  __typename?: 'WpUserRoleConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpUserRoleEdge>;
  group: Array<WpUserRoleGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldSelector;
};


export type WpUserRoleConnectionGroupArgs = {
  field: WpUserRoleFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpUserRoleConnectionMaxArgs = {
  field: WpUserRoleFieldSelector;
};


export type WpUserRoleConnectionMinArgs = {
  field: WpUserRoleFieldSelector;
};


export type WpUserRoleConnectionSumArgs = {
  field: WpUserRoleFieldSelector;
};

export type WpUserRoleConnectionEdgeType = {
  /** The connected UserRole Node */
  node: WpUserRole;
};

export type WpUserRoleConnectionPageInfoType = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpUserRoleConnectionType = {
  /** A list of connected UserRole Nodes */
  nodes: Array<WpUserRole>;
  /** Information about pagination in a connection. */
  pageInfo: WpUserRoleConnectionPageInfoType;
};

export type WpUserRoleEdge = {
  __typename?: 'WpUserRoleEdge';
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export type WpUserRoleFieldSelector = {
  capabilities?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  displayName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  nodeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type WpUserRoleFilterInput = {
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: InputMaybe<WpUserRoleFilterInput>;
};

export type WpUserRoleGroupConnection = {
  __typename?: 'WpUserRoleGroupConnection';
  distinct: Array<Scalars['String']['output']>;
  edges: Array<WpUserRoleEdge>;
  field: Scalars['String']['output'];
  fieldValue?: Maybe<Scalars['String']['output']>;
  group: Array<WpUserRoleGroupConnection>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type WpUserRoleGroupConnectionDistinctArgs = {
  field: WpUserRoleFieldSelector;
};


export type WpUserRoleGroupConnectionGroupArgs = {
  field: WpUserRoleFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WpUserRoleGroupConnectionMaxArgs = {
  field: WpUserRoleFieldSelector;
};


export type WpUserRoleGroupConnectionMinArgs = {
  field: WpUserRoleFieldSelector;
};


export type WpUserRoleGroupConnectionSumArgs = {
  field: WpUserRoleFieldSelector;
};

export type WpUserRoleSortInput = {
  capabilities?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  displayName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
};

export type WpUserSortInput = {
  avatar?: InputMaybe<WpAvatarSortInput>;
  capKey?: InputMaybe<SortOrderEnum>;
  capabilities?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  comments?: InputMaybe<WpUserToCommentConnectionTypeSortInput>;
  databaseId?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  extraCapabilities?: InputMaybe<SortOrderEnum>;
  firstName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isContentNode?: InputMaybe<SortOrderEnum>;
  isTermNode?: InputMaybe<SortOrderEnum>;
  lastName?: InputMaybe<SortOrderEnum>;
  locale?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  nicename?: InputMaybe<SortOrderEnum>;
  nickname?: InputMaybe<SortOrderEnum>;
  nodeType?: InputMaybe<SortOrderEnum>;
  pages?: InputMaybe<WpUserToPageConnectionTypeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  posts?: InputMaybe<WpUserToPostConnectionTypeSortInput>;
  registeredDate?: InputMaybe<SortOrderEnum>;
  roles?: InputMaybe<WpUserToUserRoleConnectionTypeSortInput>;
  shouldShowAdminToolbar?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  uri?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  username?: InputMaybe<SortOrderEnum>;
};

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type WpUserToCommentConnectionPageInfoType = WpCommentConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpUserToCommentConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpUserToCommentConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpUserToCommentConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUserToCommentConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the Comment type */
export type WpUserToCommentConnectionType = WpCommentConnectionType & WpConnectionType & {
  __typename?: 'WpUserToCommentConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpComment>;
  /** Information about pagination in a connection. */
  pageInfo: WpUserToCommentConnectionPageInfoType;
};

export type WpUserToCommentConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpCommentFieldSelector>;
  pageInfo?: InputMaybe<WpUserToCommentConnectionPageInfoTypeFieldSelector>;
};

export type WpUserToCommentConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
  pageInfo?: InputMaybe<WpUserToCommentConnectionPageInfoTypeFilterInput>;
};

export type WpUserToCommentConnectionTypeSortInput = {
  nodes?: InputMaybe<WpCommentSortInput>;
  pageInfo?: InputMaybe<WpUserToCommentConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;UserToPageConnection&quot; */
export type WpUserToPageConnectionPageInfoType = WpPageConnectionPageInfoType & WpPageInfoType & {
  __typename?: 'WpUserToPageConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpUserToPageConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpUserToPageConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUserToPageConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the page type */
export type WpUserToPageConnectionType = WpConnectionType & WpPageConnectionType & {
  __typename?: 'WpUserToPageConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpPage>;
  /** Information about pagination in a connection. */
  pageInfo: WpUserToPageConnectionPageInfoType;
};

export type WpUserToPageConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpPageFieldSelector>;
  pageInfo?: InputMaybe<WpUserToPageConnectionPageInfoTypeFieldSelector>;
};

export type WpUserToPageConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpPageFilterListInput>;
  pageInfo?: InputMaybe<WpUserToPageConnectionPageInfoTypeFilterInput>;
};

export type WpUserToPageConnectionTypeSortInput = {
  nodes?: InputMaybe<WpPageSortInput>;
  pageInfo?: InputMaybe<WpUserToPageConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;UserToPostConnection&quot; */
export type WpUserToPostConnectionPageInfoType = WpPageInfoType & WpPostConnectionPageInfoType & {
  __typename?: 'WpUserToPostConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpUserToPostConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpUserToPostConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUserToPostConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the post type */
export type WpUserToPostConnectionType = WpConnectionType & WpPostConnectionType & {
  __typename?: 'WpUserToPostConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpPost>;
  /** Information about pagination in a connection. */
  pageInfo: WpUserToPostConnectionPageInfoType;
};

export type WpUserToPostConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpPostFieldSelector>;
  pageInfo?: InputMaybe<WpUserToPostConnectionPageInfoTypeFieldSelector>;
};

export type WpUserToPostConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
  pageInfo?: InputMaybe<WpUserToPostConnectionPageInfoTypeFilterInput>;
};

export type WpUserToPostConnectionTypeSortInput = {
  nodes?: InputMaybe<WpPostSortInput>;
  pageInfo?: InputMaybe<WpUserToPostConnectionPageInfoTypeSortInput>;
};

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type WpUserToUserRoleConnectionPageInfoType = WpPageInfoType & WpUserRoleConnectionPageInfoType & {
  __typename?: 'WpUserToUserRoleConnectionPageInfoType';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type WpUserToUserRoleConnectionPageInfoTypeFieldSelector = {
  endCursor?: InputMaybe<FieldSelectorEnum>;
  hasNextPage?: InputMaybe<FieldSelectorEnum>;
  hasPreviousPage?: InputMaybe<FieldSelectorEnum>;
  startCursor?: InputMaybe<FieldSelectorEnum>;
};

export type WpUserToUserRoleConnectionPageInfoTypeFilterInput = {
  endCursor?: InputMaybe<StringQueryOperatorInput>;
  hasNextPage?: InputMaybe<BooleanQueryOperatorInput>;
  hasPreviousPage?: InputMaybe<BooleanQueryOperatorInput>;
  startCursor?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUserToUserRoleConnectionPageInfoTypeSortInput = {
  endCursor?: InputMaybe<SortOrderEnum>;
  hasNextPage?: InputMaybe<SortOrderEnum>;
  hasPreviousPage?: InputMaybe<SortOrderEnum>;
  startCursor?: InputMaybe<SortOrderEnum>;
};

/** Connection between the User type and the UserRole type */
export type WpUserToUserRoleConnectionType = WpConnectionType & WpUserRoleConnectionType & {
  __typename?: 'WpUserToUserRoleConnectionType';
  /** The nodes of the connection, without the edges */
  nodes: Array<WpUserRole>;
  /** Information about pagination in a connection. */
  pageInfo: WpUserToUserRoleConnectionPageInfoType;
};

export type WpUserToUserRoleConnectionTypeFieldSelector = {
  nodes?: InputMaybe<WpUserRoleFieldSelector>;
  pageInfo?: InputMaybe<WpUserToUserRoleConnectionPageInfoTypeFieldSelector>;
};

export type WpUserToUserRoleConnectionTypeFilterInput = {
  nodes?: InputMaybe<WpUserRoleFilterListInput>;
  pageInfo?: InputMaybe<WpUserToUserRoleConnectionPageInfoTypeFilterInput>;
};

export type WpUserToUserRoleConnectionTypeSortInput = {
  nodes?: InputMaybe<WpUserRoleSortInput>;
  pageInfo?: InputMaybe<WpUserToUserRoleConnectionPageInfoTypeSortInput>;
};

/** Information needed by gatsby-source-wordpress. */
export type WpWpGatsby = {
  __typename?: 'WpWPGatsby';
  /** Returns wether or not pretty permalinks are enabled. */
  arePrettyPermalinksEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Wether or not the Preview frontend URL is online. */
  isPreviewFrontendOnline?: Maybe<Scalars['Boolean']['output']>;
};

export type WpWpGatsbyFieldSelector = {
  arePrettyPermalinksEnabled?: InputMaybe<FieldSelectorEnum>;
  isPreviewFrontendOnline?: InputMaybe<FieldSelectorEnum>;
};

export type WpWpGatsbyFilterInput = {
  arePrettyPermalinksEnabled?: InputMaybe<BooleanQueryOperatorInput>;
  isPreviewFrontendOnline?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpWpGatsbySortInput = {
  arePrettyPermalinksEnabled?: InputMaybe<SortOrderEnum>;
  isPreviewFrontendOnline?: InputMaybe<SortOrderEnum>;
};

/** The writing setting type */
export type WpWritingSettings = {
  __typename?: 'WpWritingSettings';
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']['output']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']['output']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']['output']>;
};

export type WpWritingSettingsFieldSelector = {
  defaultCategory?: InputMaybe<FieldSelectorEnum>;
  defaultPostFormat?: InputMaybe<FieldSelectorEnum>;
  useSmilies?: InputMaybe<FieldSelectorEnum>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: InputMaybe<IntQueryOperatorInput>;
  defaultPostFormat?: InputMaybe<StringQueryOperatorInput>;
  useSmilies?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpWritingSettingsSortInput = {
  defaultCategory?: InputMaybe<SortOrderEnum>;
  defaultPostFormat?: InputMaybe<SortOrderEnum>;
  useSmilies?: InputMaybe<SortOrderEnum>;
};
